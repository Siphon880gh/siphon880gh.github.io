<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Achievements</title>

    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/css/lightbox.min.css">
    <link rel="stylesheet" href="./index.css">


    <script>
        // Clicking show credits will open the Credits component back over at React
        function clickNavCredited() {
            window.parent.document.querySelector('[data-php-rerouter=credited]').click();
        }
        // Initially hide the scroll position indicator on mobile because of screen real estate
        document.addEventListener("DOMContentLoaded",()=>{
            if(document.body.clientWidth<768) {
                document.querySelector("#submenu ul").previousElementSibling.dispatchEvent(new Event("click"));
            }
        })
    </script>
</head>

<body>
    <div class="nav-wrapper">
        <nav>
            <a href="../certs"><h2>Certificates</h2></a>
            <a href="#"><h2 class="active">Achievements</h2></a>
        </nav>
    </div>
    <div class="container-fluid">
        <nav id="submenu">
            <b class="fa fa-eye" style="position:absolute;top:-35px;right:-8px; font-size:150%; cursor:pointer;" onclick="this.nextElementSibling.classList.toggle('hidden')" style='cursor:pointer;'>👁️</b>
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
                        <span class="sr-only hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only hidden">Next</span>
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
            if(window.scrollY>119) {
                document.querySelector("#submenu").classList.add("sticky")
            } else {
                document.querySelector("#submenu").classList.remove("sticky")   
            }

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