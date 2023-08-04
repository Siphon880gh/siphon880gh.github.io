<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Achievements</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/css/lightbox.min.css">

    <style>

        /* GENERAL
        –––––––––––––––––––––––––––––––––––––––––––––––––– */
        :root {
            --black: #181818;
            --beige: #ffebb2;
            --red: #e74c3c;
        }

        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        ul {
            list-style: none;
        }

        a {
            color: inherit;
            text-decoration: none;
        }

        a {
            color: gray;
        }

        a:hover {
            color: white;
        }

        body {
            font: 20px/30px sans-serif;
        }

        .text-intro {
            text-align: center;
            margin: 10vh 0;
            padding: 0 15px;
        }

        h1 {
            font-size: 30px;
            line-height: normal;
            margin-top: 10px;
        }


        /* PAGE
        –––––––––––––––––––––––––––––––––––––––––––––––––– */

        /* Color Themes */
        :root {
            --darkblue: rgb(0,18,38);
            --darkblue-alpha3: rgba(0,18,38,.99);
            --darkblue-alpha2: rgba(0,18,38,.66);
            --darkblue-alpha1: rgba(0,18,38,.33);
            --blue: rgb(77,171,214);
            --blue-alpha3: rgb(77,171,214, .99);
            --blue-alpha2: rgb(77,171,214, .66);
            --blue-alpha1: rgb(77,171,214, .33);
            --yellow: rgb(250,225,75);
            --yellow-alpha3: rgb(250,225,75, .99);
            --yellow-alpha2: rgb(250,225,75, .66);
            --yellow-alpha1: rgb(250,225,75, .33);
        }


        .section {
            /* padding: 150px 205px; */
            padding: 150px 40px;
            margin: 0 auto;
        }

        @media (max-width: 768px) {

            .section {
                /* padding: 150px 205px; */
                padding: 70px 20px;
                margin: 0 auto;
            }
        }

        .section:nth-of-type(1),
        .section:nth-of-type(3) {
            background: var(--beige);
        }

        .section-text {
            margin: 50px 0;
            /* max-width: 800px; */
        }

        .section-btn {
            display: inline-block;
            color: var(--beige);
            background: var(--black);
            border: 1px solid var(--black);
            min-width: 200px;
            height: 50px;
            padding: 9px 40px;
            text-align: center;
            transition: all 300ms ease;
        }

        @keyframes forward-white {
            0% {
                background-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
            }

            ;

            100% {
                background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
            }
        }

        .section-btn:hover {

            background: white;
            color: var(--black);
            animation-name: forward-white;
            animation-duration: 2s;
        }

        .container-fluid {
            position: relative;
        }

        /* SUBMENU
        –––––––––––––––––––––––––––––––––––––––––––––––––– */
        #submenu {
            /* width: 205px; */
            position: fixed;
            right: 10px;
            top: 10px;
            border: 2.5px dashed rgba(255, 255, 255, 0.75);
            z-index: 5;
            background: white;
        }

        #submenu ul {
            margin: 0;
            padding: 0;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
        }

        #submenu li {
            padding: 20px 45px;
            /* border: 2.5px dashed rgba(255,255,255,1); */
            border: 2.5px dashed rgba(255, 180, 0, .5);
        }

        #submenu li:hover {
            color: white;
            background-color: #453647;
            border: 2.5px solid rgba(255, 255, 255, 1);
            text-decoration: underline;
        }

        #submenu li.active {
            background-color: #FFCB78;
            font-weight: 800;
        }

        #submenu li:hover a {
            color: white;
        }

        #submenu ul {
            width: 100%;
        }

        #submenu ul li {
            display: inline-block;
        }

        /* Keep for now in case decide to do a | menu style */
        #submenu ul li:not(.divider) {
            display: inline-block;
            padding: 5px;
            white-space: nowrap;
        }

        /* IMG SLIDES
        –––––––––––––––––––––––––––––––––––––––––––––––––– */

        img.standalone {
            width: 85vw;
            margin: 60px auto;
            display: block;
            border: 1px solid gray;
            transition: all 300ms ease;
        }

        img.standalone:hover {
            width: 88vw;
        }


        /* CAROUSEL
        –––––––––––––––––––––––––––––––––––––––––––––––––– */
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
            filter: invert();
        }

        .section-horizontal {
            padding: 20px 0;
            padding-bottom: 110px;
        }

        .section-horizontal .leaderboard-mimo {
            width: 20vw;
            /** Maintain aspect ratio of phone. For example: 409px width, 861px height */
            height: calc(20vw / 0.475029036004646);
            transition: all 400ms ease;
        }

        .section-horizontal .leaderboard-mimo:hover {
            width: 23vw;
            /** Maintain aspect ratio of phone. For example: 409px width, 861px height */
            height: calc(23vw / 0.475029036004646);
        }

        .section-horizontal {
            display: flex;
            justify-content: center;
            flex-flow: row nowrap;
            width: 100%;
            overflow-x: scroll;
            gap: 10px;
        }

        .carousel-item {
            text-align: center;
        }

        .carousel-item img {
            margin-right: 30px;
        }


        /* RESPONSIVE
        –––––––––––––––––––––––––––––––––––––––––––––––––– */
        @media (max-width: 768px) {
            #submenu ul {
                font-size: 60%;
            }

            .section-horizontal .leaderboard-mimo {
                width: 85vw;
                /** Maintain aspect ratio of phone. For example: 409px width, 861px height */
                height: calc(85vw / 0.475029036004646);
                transition: all 400ms ease;
                margin-bottom:10px;
            }

            .section-horizontal .leaderboard-mimo:hover {
                width: 88vw;
                /** Maintain aspect ratio of phone. For example: 409px width, 861px height */
                height: calc(88vw / 0.475029036004646);
            }

            img.standalone {
                width: 85vw;
            }

            img.standalone:hover {
                width: 90vw;
            }

        }
    </style>

    <script>
        function clickNavCredited() {
            window.parent.document.querySelector('[data-php-rerouter=credited]').click();
        }
    </script>
</head>

<body>
    <div class="container-fluid">
        <nav id="submenu">
            <ul>
                <li>
                    <a href="#credited" onclick="scrollToEl(event)">Credited</a>
                </li>
                <li>
                    <a href="#featured" onclick="scrollToEl(event)">Featured in</a>
                </li>
                <li>
                    <a href="#leaderboards" onclick="scrollToEl(event)">Leaderboards</a>
                </li>
                <li>
                    <a href="#top-marks" onclick="scrollToEl(event)">Top Marks</a>
                </li>
            </ul>
        </nav>
        <div class="row">

            <section class="section col-12" id="credited">
                <h2>Credited</h2>
                <div class="section-text">
                    I'm credited at several websites
                </div>
                <a href="javascript:void(0)" onclick="clickNavCredited();" class="section-btn">
                    See my credits →
                </a>
            </section>
            <section class="section col-12" id="featured">
                <h2>Featured in</h2>
                <div class="section-text">
                    I'm featured at ExRx.net for a few fitness and health related apps. See "Apps for Mobile Browser".
                </div>
                <a href="https://exrx.net/Notes/Links/Miscellaneous#Apps" class="section-btn" target="_blank">
                    Apps for Mobile Browser →
                </a>
            </section>
            <section class="section col-12" id="leaderboards">
                <h2>Leaderboards</h2>
                <div id="carouselExampleControls" class="carousel slide section-horizontal" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <a href="img/leaderboard-mimo-1--gold.png" data-lightbox="image-1" data-title="">
                                <img class="leaderboard-mimo" src="img/leaderboard-mimo-1--gold.png" alt="" />
                            </a>
                            <a href="img/leaderboard-mimo-3--gold-obtained.png" data-lightbox="image-1" data-title="">
                                <img class="leaderboard-mimo" src="img/leaderboard-mimo-3--gold-obtained.png" alt="" />
                            </a>
                        </div>
                        <div class="carousel-item">
                            <a href="img/leaderboard-mimo-4--trophies.png" data-lightbox="image-1" data-title="">
                                <img class="leaderboard-mimo" src="img/leaderboard-mimo-4--trophies.png" alt="" />
                            </a>
                            <a href="img/leaderboard-mimo-2--stone.png" data-lightbox="image-1" data-title="">
                                <img class="leaderboard-mimo" src="img/leaderboard-mimo-2--stone.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </section> <!-- Ends Leaderboards -->
            <section class="section col-12" id="top-marks">
                <h2>Top Marks</h2>
                <div class="section-text">
                    <p>Attended UCLA Extension for 6-month intensive web development course to update my skillset to modern MERN, and it covered additional jQuery, Handlebars, MySQL, GraphQL. Scored <b>top marks</b> in the class:</p>
                    <a href="img/top-marks.pdf" target="_blank">
                        <img class="standalone" src="img/top-marks.png" alt="" />
                    </a>
                </div>
            </section> <!-- Ends Leaderboards -->
        </div>
    </div>

    <script>
        function scrollToEl(event) {
            event.preventDefault();
            event.stopPropagation();
            let hash = event.target.href.split("#")[1]
            $("html, body").animate({
                scrollTop: document.getElementById(hash).offsetTop
            }, 1000);
        } // scrollToEl

        document.addEventListener("scroll", (event) => {


            for (var i = 1; i < 5; i++) { // nth of type: 1,2,3,4
                if (elIsInTopHalfWindow(document.querySelector(`section:nth-of-type(${i})`))) {
                    if (!document.querySelector(`#submenu ul li:nth-of-type(${i})`).classList.contains("active")) {
                        document.querySelectorAll("#submenu ul li.active").forEach(li => {
                            li.classList.remove("active");
                        })
                        document.querySelector(`#submenu ul li:nth-of-type(${i})`).classList.add("active")
                    }
                }
            }


        });

        function elIsInTopHalfWindow(el) {

            let scrollPos = window.scrollY;
            let windowHeightHalved = window.outerHeight / 2;
            let elOffsetTop = el.offsetTop;

            return (scrollPos >= elOffsetTop && scrollPos <= elOffsetTop + windowHeightHalved)
        }

        // ;
    </script>

    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js"></script>
</body>

</html>