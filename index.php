<?php
/**
 * Home front controller (vhost / Apache / nginx with PHP).
 *
 * Reads config.json → homeScroll (bool), animatedAvatar (bool).
 * - true  → render the 3D scroll experience at / (same markup/behavior as /scroll/), no redirect.
 * - false → classic Cool Style home (index.html).
 * - ?classic=1 → always classic, even when homeScroll is true.
 * - animatedAvatar true → intro portrait uses assets/img/avatar-animated.webp instead of headshot.png.
 *
 * GitHub Pages / pure static hosts ignore this file and serve index.html (classic-only, no redirect).
 * Prefer DirectoryIndex index.php index.html so PHP wins when both exist.
 */
declare(strict_types=1);

header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

if (!function_exists('me_home_config')) {
    function me_home_config(): array
    {
        $path = __DIR__ . '/config.json';
        if (!is_readable($path)) {
            return [];
        }
        $raw = file_get_contents($path);
        if ($raw === false) {
            return [];
        }
        $data = json_decode($raw, true);
        return is_array($data) ? $data : [];
    }
}

if (!function_exists('me_apply_animated_avatar')) {
    /**
     * Swap intro portrait headshot → animated avatar when config says so.
     * Handles both classic (./assets/...) and scroll (../assets/...) path prefixes.
     */
    function me_apply_animated_avatar(string $html, bool $animated): string
    {
        if (!$animated) {
            return $html;
        }
        // Only swap the live src= — leave data-avatar-static / data-avatar-animated alone for JS.
        return str_replace(
            [
                'src="./assets/img/people/headshot.png"',
                'src="../assets/img/people/headshot.png"',
            ],
            [
                'src="./assets/img/avatar-animated.webp"',
                'src="../assets/img/avatar-animated.webp"',
            ],
            $html
        );
    }
}

$cfg = me_home_config();
$homeScroll = !empty($cfg['homeScroll']);
$animatedAvatar = !empty($cfg['animatedAvatar']);
$wantClassic = isset($_GET['classic']) && (string) $_GET['classic'] === '1';

if (!$homeScroll || $wantClassic) {
    $classic = __DIR__ . '/index.html';
    if (!is_readable($classic)) {
        http_response_code(500);
        echo 'Classic home (index.html) is missing.';
        exit;
    }
    $html = file_get_contents($classic);
    if ($html === false) {
        http_response_code(500);
        echo 'Could not read classic home.';
        exit;
    }
    echo me_apply_animated_avatar($html, $animatedAvatar);
    exit;
}

$scrollFile = __DIR__ . '/scroll/index.html';
if (!is_readable($scrollFile)) {
    http_response_code(500);
    echo 'Scroll home (scroll/index.html) is missing.';
    exit;
}

$html = file_get_contents($scrollFile);
if ($html === false) {
    http_response_code(500);
    echo 'Could not read scroll home.';
    exit;
}

// Apply avatar swap before path rewrite so both ../ and post-rewrite ./ forms stay correct.
$html = me_apply_animated_avatar($html, $animatedAvatar);

// scroll/index.html paths are relative to /scroll/; rewrite so the same markup works at site root.
// Order matters: rewrite scroll-local assets before the general ../ → ./ pass.
$html = str_replace(
    [
        'href="./scroll.css"',
        'src="./scroll.js"',
        'href="../',
        'src="../',
        'content="../',
        '="../', // data-avatar-* and any other relative attr values
    ],
    [
        'href="./scroll/scroll.css"',
        'src="./scroll/scroll.js"',
        'href="./',
        'src="./',
        'content="./',
        '="./',
    ],
    $html
);

// Home URL should use the main site title (content/behavior still matches /scroll/).
$html = str_replace(
    '<title>Scroll story — Weng Industry</title>',
    '<title>Weng Industry — Software that ships. Advice that compounds.</title>',
    $html
);
$html = str_replace(
    '<meta property="og:title" content="Scroll story — Weng Industry">',
    '<meta property="og:title" content="Weng Industry — Software that ships. Advice that compounds.">',
    $html
);

echo $html;
