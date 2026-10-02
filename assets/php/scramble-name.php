<?php
declare(strict_types=1);

/**
 * Privacy helpers for student display names.
 * Keeps the given/first name readable; deterministically scrambles the last name.
 * Do not invent students — only transform names that already exist in source data.
 */

if (!function_exists('me_scramble_token')) {
    function me_scramble_token(string $token): string
    {
        $token = trim($token);
        if ($token === '') {
            return $token;
        }
        // Preserve non-letter separators (hyphen, apostrophe, etc.) while scrambling letters.
        $chars = preg_split('//u', $token, -1, PREG_SPLIT_NO_EMPTY);
        if ($chars === false || count($chars) <= 1) {
            return $token;
        }
        $letters = [];
        $letterIdx = [];
        foreach ($chars as $i => $ch) {
            if (preg_match('/\p{L}/u', $ch)) {
                $letters[] = $ch;
                $letterIdx[] = $i;
            }
        }
        if (count($letters) <= 1) {
            return $token;
        }
        $first = array_shift($letters);
        $seed = crc32(mb_strtolower($token, 'UTF-8'));
        // Deterministic Fisher–Yates on the remaining letters.
        $n = count($letters);
        for ($i = $n - 1; $i > 0; $i--) {
            $seed = ($seed * 1103515245 + 12345) & 0x7fffffff;
            $j = $seed % ($i + 1);
            $tmp = $letters[$i];
            $letters[$i] = $letters[$j];
            $letters[$j] = $tmp;
        }
        // Avoid no-op scramble when possible.
        $origRest = [];
        foreach ($letterIdx as $k => $idx) {
            if ($k === 0) {
                continue;
            }
            $origRest[] = $chars[$idx];
        }
        if ($letters === $origRest && $n >= 2) {
            $tmp = $letters[0];
            $letters[0] = $letters[$n - 1];
            $letters[$n - 1] = $tmp;
        }
        array_unshift($letters, $first);
        foreach ($letterIdx as $k => $idx) {
            $chars[$idx] = $letters[$k];
        }
        return implode('', $chars);
    }
}

if (!function_exists('me_split_display_name')) {
    /** @return array{0:string,1:string} first name, last name (may be empty) */
    function me_split_display_name(string $full): array
    {
        $full = trim(preg_replace('/\s+/u', ' ', $full) ?? $full);
        if ($full === '') {
            return ['', ''];
        }
        $parts = explode(' ', $full, 2);
        if (count($parts) === 1) {
            return [$parts[0], ''];
        }
        return [$parts[0], $parts[1]];
    }
}

if (!function_exists('me_privacy_name_html')) {
    /**
     * HTML: FirstName <span class="student-lastname">ScrambledLast</span>
     * Escapes text; last-name span is for CSS blur.
     */
    function me_privacy_name_html(string $full): string
    {
        [$first, $last] = me_split_display_name($full);
        $esc = static function (string $s): string {
            return htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
        };
        if ($last === '') {
            return $esc($first);
        }
        $scrambled = me_scramble_token($last);
        return $esc($first) . ' <span class="student-lastname" title="Last name blurred for privacy" aria-label="last name hidden">' . $esc($scrambled) . '</span>';
    }
}

if (!function_exists('me_privacy_name_plain')) {
    /** Plain "First ScrambledLast" for non-HTML contexts. */
    function me_privacy_name_plain(string $full): string
    {
        [$first, $last] = me_split_display_name($full);
        if ($last === '') {
            return $first;
        }
        return $first . ' ' . me_scramble_token($last);
    }
}
