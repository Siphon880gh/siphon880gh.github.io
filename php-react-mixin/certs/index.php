<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certificates</title>


    <!-- jQuery and Bootstrap  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">
    <script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
    
    <!-- Livequery -->
    <script src="//raw.githack.com/hazzik/livequery/master/src/jquery.livequery.js"></script>

    <!-- Devicon, Font Awesome -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <link rel="stylesheet" href="./index.css">
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
                    <hr class="">
                </figure>
            </section>
        </article> <!-- ends col -->
*/
?>

<body>
    <div class="nav-wrapper">
        <nav>
            <a href="#"><h2 class="active">Certificates</h2></a>
            <a href="../achievements"><h2>Achievements</h2></a>
        </nav>
        <nav>
            <!-- <button class="btn btn-full-screen" onclick="uiFullScreenRequest()" style="margin-left:30px;">Full screen</button> -->

            <div class="cue-scroll-down-wrapper hidden">
                <div class="cue-label">Scroll right at certificates</div>                
                <div class="cue-scroll-down"></div>
            </div>
        </nav>
    </div>
    <main class="certs">
        <button class="btn btn-cancel-full-screen" onclick="uiFullScreenRequest()" style="margin-left:30px;">Exit Full Screen</button>
        <div class="certs-inner">
            <article class="tech col">
                <header>
                    <h3><i class="devicon-html5-plain"></i> Webdev</h3>
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

            <article class="tech col" id="intersection-observer">
                <header>
                    <h3><i class="devicon-css3-plain"></i> CSS</h3>
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
                <h3><i class="devicon-mysql-plain"></i> MySQL</h3>
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
                    <h3><i class="devicon-python-plain"></i> Python</h3>
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


            <!--<article class="tech col">
                <header>
                    <h3><img class="hover-invert" src="./img/icons/ChatGPT.png" style="width:30px; height:30px; margin-top:-5px;"></img> Prompt Engineering</h3>
                    <div class="col-desc">
                        
                    </div>
                </header>
                <section class="col-body">
                    <figure class="cert">
                        <h4>EdX AI Applications and Prompt Engineering 2023-August</h4>
                        <a href="https://execedcertificates.berkeley.edu/7eb1670c-a8b4-4336-8184-0f155d0fbf77#gs.t7j61o" target="_blank">
                            <img src="img/pms-2022-12.png" alt="">
                        </a>
                        <figcaption>
                            <p>...</p>
                        </figcaption>
                        <hr class="d-none">
                    </figure>

                    <figure class="cert">
                        <h4>EdX Prompt Engineering and Advanced ChatGPT 2023-August</h4>
                        <a href="https://execedcertificates.berkeley.edu/7eb1670c-a8b4-4336-8184-0f155d0fbf77#gs.t7j61o" target="_blank">
                            <img src="img/pms-2022-12.png" alt="">
                        </a>
                        <figcaption>
                            <p>...</p>
                        </figcaption>
                        <hr class="d-none">
                    </figure>
                </section>
            </article> --><!-- ends col -->

            <article class="tech col">
                <header>
                    <h3><i class="fa fa-project-diagram"></i> Project Management</h3>
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
        /** Full Screen */
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


        /* Observe if element goes into view or viewport */

        document.addEventListener("DOMContentLoaded", ()=>{
            if(document.body.clientWidth<768) {
                $(".cue-scroll-down-wrapper").removeClass("hidden");
            } else {
                $(".cue-scroll-down-wrapper").remove();
            }
        })

        class ElementIntoViewport {
            constructor() {

                // Set up the Intersection Observer on the element
                this.observer = new IntersectionObserver(
                entries => {
                    // The callback will return an array of entries, even if you are only observing a single element
                    if (entries[0].isIntersecting) {
                        // console.log('Element IS in the viewport.');
                        $(".cue-scroll-down-wrapper").remove();
                    } else {
                        // console.log('Element is not in the viewport.');
                    }
                },
                {
                root: null, // default is the viewport
                rootMargin: '0px',
                threshold: 0.1  // 0.1 means that at least 10% of the target's visibility has crossed the threshold of being in viewport
                }
            );
        
            if (document.querySelector("#intersection-observer")) {
                this.observer.observe(document.querySelector("#intersection-observer")); // Start observing the ref
            }

        } // constructor

    } // class ElementIntoViewport
    const evp = new ElementIntoViewport();

    </script>
    
</body>
</html>