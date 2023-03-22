<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sandbox</title>


    <!-- jQuery and Bootstrap  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">
    <script src="//code.jquery.com/jquery-2.1.4.min.js"></script>

    <!-- Livequery -->
    <script src="//raw.githack.com/hazzik/livequery/master/src/jquery.livequery.js"></script>

    <style>
        /** General */
        body, .certs {
            margin: 10px;
            margin-bottom: 20px;
            background-color: rgba(223,222,219,1);
        }
        a {
            color: rgba(150,75,0,.5);
            transition: all 300ms linear;
        }
        a:hover {
            color: rgba(150,75,0,1)
        }
        h2 {
            background-color: #4d4844;
            font-weight: 800;
            box-shadow: 5px 5px #453647;
            margin-bottom: 20px;
            color: rgba(255,255,255,0.8);
        }
        h3 {
            /* #4d4844 */
            background-color: rgba(77,72,68,0.5);
            font-weight: 600;
        }
        h2 {
            display: inline-block;
            padding: 5px;
        }
        h3 {
            display:block;
            padding: 5px;
        }
        nav {
            margin: 0 0 30px 0;
        }
        .btn-full-screen, .btn-cancel-full-screen {
            border: 2px solid transparent;
            background-color: rgba(255,255,255,.75);
            transition: all 200ms ease;
        }
        .btn-full-screen:hover, .btn-cancel-full-screen:hover {
            border: 2px solid #453647;
        }
        .btn-full-screen {
            position: absolute;
            top: 15px;
            right: 15px;
        }
        /* Utility classes */
        .ta-right {
            text-align:right;
        }
        .mb-10px {
            margin-bottom: 10px;
        }
        .wide-as-parent {
            width:100%;
            display: inline-block;
        }
        .opacity-70 {
            opacity: 0.7
        }
        .opacity-90 {
            opacity: 0.9
        }
        .color-preset-1 {
            filter: brightness(110%) saturate(2.1)
        }
        .d-none {
            display: none;
        }
        /* Columns container */
        .certs {
            border-radius: 5px;

            overflow-y: scroll;
            /* max-height: 670px; */
            margin: 0 30px;
            border: 5px solid rgba(69,54,71,1);
            padding: 10px;
            padding-bottom:15px;
        }
        .certs-inner {
            display: flex;
            justify-content: flex-start;
            flex-flow: row nowrap;
            gap: 10px;
        }
        .certs.full-screen .tech.col {
            border: none;
        }
        .certs:not(.full-screen) .btn-cancel-full-screen {
            display: none;
        }
        .certs.full-screen .btn-cancel-full-screen {
            position: fixed;
            bottom: 20px;
            right: 20px; 
        }
        /* Column */
        .tech.col {
            /* #453647 */
            
            border: 2.5px solid rgba(69,54,71,0.5);
            min-width: 20vw;
            height: 100%;
            transition: all 100ms linear;
        }
        .tech.col:hover {
            /* #453647 */
            /* background: rgba(223,222,219,1); */
            background-color: rgba(100,50,20,0.2);
            border: 2.5px solid rgba(69,54,71,1);
            min-width: 22vw !important;
        }
        .tech.col:hover h3 {
            /* background-color: rgba(77,72,68,0.5); */
            background-color: rgba(0,0,0,.25);
        }
        .col-desc {
            padding: 0 10px;
        }
        .tech.col .col-body {
            padding: 15px;
        }
        /* Certificate in column */
        .cert hr {
            height: 2.5px;
        }
        .cert hr.bottom {
            margin: 0 20px;
        }
        .cert img {
            width: 100%;
            transition: all 500ms ease;
            border: 5px solid transparent;
        }
        .cert a>img:hover {
            border: 5px solid rgba(200,0,0,0.25);
        }
        .cert figcaption {
            padding: 0 10px;
            font-size: 80%;
        }
        .cert details img {
            width:75%;
            display: inline-block;
        }
        .cert details summary {
            font-style: italic;
            margin-top:5px;
        }
        /* Underneath certificates section */
        aside {
            margin-top:60px;
        }
    </style>
    
</head>

<?php
/*
        <article class="tech col">
            <header>
                <h3>___</h3>
                <div class="col-desc">
                ___
                </div>
            </header>
            <section class="col-body">
                <figure class="cert">
                    <h4>___</h4>
                    <a href="___" target="_blank">
                        <img src="___" alt="">
                    </a>
                    <figcaption></figcaption>
                    <hr/>
                </figure>
            </section>
        </article> <!-- ends col -->
*/
?>

<body>
    <h2>Certificates</h2>
    <nav>
        <button class="btn btn-full-screen" onclick="uiFullScreenRequest()" style="margin-left:30px;">Full screen</button>
    </nav>
    <main class="certs">
        <button class="btn btn-cancel-full-screen" onclick="uiFullScreenRequest()" style="margin-left:30px;">Exit Full Screen</button>
        <div class="certs-inner">
            <article class="tech col">
                <header>
                    <h3>Webdev</h3>
                    <div class="col-desc">
                    </div>
                </header>
                <section class="col-body">
                    <figure class="cert">
                        <h4>Full Stack MERN+ 2021-Apr</h4>
                        <a href="https://www.parchment.com/u/award/36e58e5db94b8d9554ab873daeb04550" target="_blank">
                            <img class="opacity-70" src="img/web-dev-2021-04.png" alt="">
                        </a>
                        <figcaption>
                            <p>MERN Stack and additionally jQuery, Handlebars, Redux, mySQL, Sequelize, Mongoose, GraphQL.</p>
                            <p>Have been doing PHP-jQuery-MySQL since 2015, and had experimented with React; however wanted to cement my skills of modern stacks so decided to join UCLA's 6 month intensive program. Obtained <a href="#">top marks</a> in class.</p>
                        </figcaption>
                        <hr class="">
                    </figure>
                    <figure class="cert">
                        <h4>Web Dev 2023-Jan</h4>
                        <a href="web-dev-2023-01.png" target="_blank">
                            <img class="opacity-70" src="img/web-dev-2023-01.png" alt="">
                        </a>
                        <figcaption>
                            <p>Was already doing HTML, CSS, Javascript in 2015. Figured I would get the certificate easily.</p>
                        </figcaption>
                        <hr class="d-none">
                    </figure>
                </section>
            </article> <!-- ends col -->

            <article class="tech col">
                <header>
                    <h3>CSS</h3>
                    <div class="col-desc">
                    </div>
                </header>
                <section class="col-body">
                    <figure class="cert">
                        <h4>CSS 2017</h4>
                        <a href="https://verify.w3schools.com/1MMUB7JRUS" target="_blank">
                            <img src="img/css-2017.jpg" alt="">
                        </a>
                        <figcaption>
                            <p>Was already coding with CSS in 2015. Taken assessment to test if I had any gaps in knowledge and skills.</p>
                        </figcaption>
                        <hr class="d-none">
                    </figure>
                </section>
            </article> <!-- ends col -->

            <article class="tech col">
                <h3>MySQL</h3>
                <section class="col-body">
                    <figure class="cert">
                        <h4>MySQL 2023-Feb</h4>
                        <a href="https://verify.w3schools.com/1NDX5PFF1O" target="_blank">
                            <img src="img/mysql-2023-02-w3.png" alt="">
                        </a>
                        <figcaption>
                            Looking back I was inspired from my MERN certificate that proved MongoDB expertise. Wanted to have some certificate for my other database knowledge. Decided to get two MySQL certificates the same time. 
                            <details>
                                <summary class="ta-right">Scored 100% on first try assessment</summary>
                                <a class="ta-right wide-as-parent" href="img/mysql-2023-02-w3-first-try.png" target="_blank">
                                    <img src="img/mysql-2023-02-w3-first-try.png" alt="">
                                </a>
                            </details>
                        </figcaption>
                        <hr class="">
                    </figure>
                    <figure class="cert">
                        <h4>MySQL 2023-Feb</h4>
                        <a href="img/mysql-2023-02-mimo.png">
                            <img class="opacity-70 color-preset-1" src="img/mysql-2023-02-mimo.png" alt="">
                        </a>
                        <figcaption>Looking back I was inspired from my MERN certificate that proved MongoDB expertise. Wanted to have some certificate for my other database knowledge. Decided to get two MySQL certificates the same time.</figcaption>                
                        <hr class="d-none">
                    </figure>
                </section>
            </article> <!-- ends col -->

            <article class="tech col">
                <header>
                    <h3>Python</h3>
                    <div class="col-desc">
                        
                    </div>
                </header>
                <section class="col-body">
                    <figure class="cert">
                        <h4>Python 2022-Dec</h4>
                        <a href="img/python-2022-12.png" target="_blank">
                            <img class="opacity-70 color-preset-1" src="img/python-2022-12.png" alt="">
                        </a>
                        <figcaption>
                            <p>Learned Python with the vision of using AI and data science in my apps in the future.</p>
                        </figcaption>
                        <hr class="d-none">
                    </figure>
                </section>
            </article> <!-- ends col -->

            <article class="tech col">
                <header>
                    <h3>Project Management</h3>
                    <div class="col-desc">
                        
                    </div>
                </header>
                <section class="col-body">
                    <figure class="cert">
                        <h4>Project Management 2022-Dec</h4>
                        <a href="https://execedcertificates.berkeley.edu/7eb1670c-a8b4-4336-8184-0f155d0fbf77#gs.t7j61o" target="_blank">
                            <img src="img/pms-2022-12.png" alt="">
                        </a>
                        <figcaption>
                            <p>Learned Project Management with the prestigious UC Berkeley in an effort to understand how to manage an app as a product and how business works in the tech world. We went over idea to product, researching the market, researching the customer, aligning with business partners, designing channels, and capturing value, and leadership.</p>
                        </figcaption>
                        <hr class="d-none">
                    </figure>
                </section>
            </article> <!-- ends col -->
        </div> <!-- Ends certs-inner -->
    </main> <!-- Ends certs -->
    <!-- <aside>
        May not have certificates in PHP, but here is my body of work to prove.
        Need more proof?
        <ul>
            <li>Credited</li>
            <li>Achievements</li>
            <li>Student testimonials (I help coding bootcamp students)</li>
            <li>Tutorial videos at Youtube</li>
            <li>Client Testimonials</li>
            <li>Work</li>
        </ul>

    </aside> -->

    <script>
        window.fullScreenApiInstance = null;
        function uiFullScreenRequest() {
            if(window.fullScreenApiInstance===null) {
                window.fullScreenApiInstance = new fullScreenApi();
            }
            window.fullScreenApiInstance.toggle(
                ()=>{ 
                    fullScreenApiInstance.launchFullscreen(document.querySelector(".certs"));
                    document.querySelector(".certs").classList.add("full-screen")
                },
                ()=>{ 
                    fullScreenApiInstance.cancelFullscreen() 
                    document.querySelector(".certs").classList.remove("full-screen")
                })
        }

        class fullScreenApi {
            constructor() {
                this.toggled = false;
            }

            toggle(cbFullScreen, cbNormalScreen) {
                this.toggled = !this.toggled;
                if(this.toggled) 
                    cbFullScreen()
                else
                    cbNormalScreen();
            }

            launchFullscreen(element) {
                if(element.requestFullScreen) {
                    element.requestFullScreen();
                } else if(element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if(element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                }
            }
    
            cancelFullscreen() {
                if(document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if(document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if(document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            } // cancelFullscreen
        } // class

    </script>
    
</body>
</html>