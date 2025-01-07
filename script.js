
        (function (e, t, p) {
            var n = document.documentElement
                , s = {
                    p: [],
                    r: []
                }
                , u = {
                    p: s.p,
                    r: s.r,
                    push: function (e) {
                        s.p.push(e)
                    },
                    ready: function (e) {
                        s.r.push(e)
                    }
                };
            e.intellimize = u,
                n.className += " " + p,
                setTimeout(function () {
                    n.className = n.className.replace(RegExp(" ?" + p), "")
                }, t)
        }
        )(window, 4000, 'anti-flicker')

        WebFont.load({
            google: {
                families: ["Inconsolata:400,700"]
            }
        });
   
        !function (o, c) {
            var n = c.documentElement
                , t = " w-mod-";
            n.className += t + "js",
                ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
        }(window, document);
  
        
        localStorage.removeItem('intellimize_opt_out_117678477');
        if (localStorage.getItem('intellimize_data_tracking_type') !== 'always') {
            localStorage.setItem('intellimize_data_tracking_type', 'always');
        }
   
        (function (e, t, p) {
            var n = document.documentElement
                , s = {
                    p: [],
                    r: []
                }
                , u = {
                    p: s.p,
                    r: s.r,
                    push: function (e) {
                        s.p.push(e)
                    },
                    ready: function (e) {
                        s.r.push(e)
                    }
                };
            e.intellimize = u,
                n.className += " " + p,
                setTimeout(function () {
                    n.className = n.className.replace(RegExp(" ?" + p), "")
                }, t)
        }
        )(window, 4000, 'anti-flicker')
   
        var wfClientScript = document.createElement("script");
        wfClientScript.src = "https://cdn.intellimize.co/snippet/117678477.js",
            wfClientScript.async = !0,
            wfClientScript.onerror = function () {
                document.documentElement.className = document.documentElement.className.replace(RegExp(" ?anti-flicker"), "")
            }
            ,
            document.head.appendChild(wfClientScript);
   
                    //Close modal when pressing the Esc key
                    window.addEventListener('keyup', function (event) {
                        if (event.which === 27) {
                            wf_utils.signupModalUtils.closeModal();
                        }
                    });

                    //Lock body scroll when nav is open
                    window.addEventListener('DOMContentLoaded', (event) => {
                        $('.brand-boilerplate-components--g-nav_menu-button, .w-nav-overlay').click(function () {
                            if ($('body').css('overflow') !== 'hidden') {
                                $('body').css('overflow', 'hidden');
                            } else {
                                $('body').css('overflow', 'auto');
                            }
                        });
                    }
                    );

                    // Global nav - Changes subnav height and width in a very flowy way
                    window.onload = function () {
                        $('.brand-boilerplate-components--g-nav_menu-dropdown_toggle').on('click', function () {
                            const containerElement = $(this).next().find('.brand-boilerplate-components--g-nav_menu_container');

                            setTimeout(function () {
                                const containerWidth = containerElement.outerWidth();
                                $('.brand-boilerplate-components--g-nav_menu-container-bg').width(containerWidth);

                                const containerHeight = containerElement.outerHeight();
                                $('.brand-boilerplate-components--g-nav_menu-container-bg').height(containerHeight);
                            }, 50);
                        });
                    }
                        ;
                
                // Add reduced motion IX to <body>
                const observer = new MutationObserver(function (m, mo) {
                    const body = document.body;
                    if (body) {
                        body.setAttribute("data-wf-ix-vacation", "1");
                        mo.disconnect();
                    }
                }
                );

                observer.observe(document, {
                    childList: true,
                    subtree: true,
                });

                // Load all of this after the whole page (and jquery) has loaded
                window.onload = function () {

                    // Set footer copyright year
                    $('.brand-boilerplate-components--footer-copyright_year, .footer-copyright_year').text(new Date().getFullYear());

                    // "Skip to main" script
                    var skipLinkEle = document.getElementById('skip-link');
                    if (skipLinkEle) {
                        skipLinkEle.addEventListener('click keydown', function (e) {
                            if (e.type === "keydown" && e.which !== 13) {
                                return;
                            }

                            e.preventDefault();
                            var target = document.getElementById('main');
                            target.setAttribute('tabindex', '-1');
                            target.focus();
                        });
                    }

                    // Trap modal focus and enable ESC key for accessibility
                    var buttonThatOpenedModal;
                    var findModal = function (elem) {
                        var tabbable = elem.find('select, input, textarea, button, a').filter(':visible');
                        var firstTabbable = tabbable.first();
                        var lastTabbable = tabbable.last();

                        firstTabbable.focus();

                        lastTabbable.on('keydown', function (e) {
                            if ((e.which === 9 && !e.shiftKey)) {
                                e.preventDefault();
                                firstTabbable.focus();
                            }
                        });

                        firstTabbable.on('keydown', function (e) {
                            if ((e.which === 9 && e.shiftKey)) {
                                e.preventDefault();
                                lastTabbable.focus();
                            }
                        });

                        elem.on('keydown', function (e) {
                            if (e.keyCode === 27) {
                                $(elem).find('[class$="modal-close_btn"]').click();
                            }
                            ;
                        });
                    };

                    var modalOpenButton = $('[class$="modal-open_btn"]');
                    modalOpenButton.on('keydown', function (e) {
                        if (e.which !== 13 && e.which !== 32) {
                            return;
                        }

                        e.preventDefault();
                        var evt = document.createEvent("MouseEvents");
                        evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                        $(this).get(0).dispatchEvent(evt);
                    });
                    modalOpenButton.on('click', function () {
                        $(this).next().show();
                        findModal($(this).next());
                        buttonThatOpenedModal = $(this);
                    });

                    var modalCloseButton = $('[class$="modal-close_btn"], [class$="modal-close_area"]');
                    modalCloseButton.on('keydown', function (e) {
                        if (e.which !== 13 && e.which !== 32) {
                            return;
                        }

                        e.preventDefault();
                        var evt = document.createEvent("MouseEvents");
                        evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                        $(this).get(0).dispatchEvent(evt);
                    });
                    modalCloseButton.on('click', function () {
                        $(this).closest('[class$="modal-wrapper"]').hide();
                        if (buttonThatOpenedModal) {
                            buttonThatOpenedModal.focus();
                            buttonThatOpenedModal = null;
                        }
                    });

                    // Toggle accordion attributes for accessibility
                    var accordionToggleButton = $('.accordion-trigger');
                    accordionToggleButton.on('keydown', function (e) {
                        if (e.which !== 13 && e.which !== 32) {
                            return;
                        }
                        e.preventDefault();

                        var evt = document.createEvent("MouseEvents");
                        evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                        $(this).get(0).dispatchEvent(evt);
                    });

                    accordionToggleButton.on('click', function (e) {
                        $(this).toggleAttrVal('aria-expanded', "false", "true");
                        $(this).parent().find('.accordion-content').toggleAttrVal('aria-hidden', "true", "false");
                    });

                    // jQuery method to toggle attribute value
                    $.fn.toggleAttrVal = function (attr, val1, val2) {
                        var test = $(this).attr(attr);
                        if (test === val1) {
                            $(this).attr(attr, val2);
                            return this;
                        }
                        if (test === val2) {
                            $(this).attr(attr, val1);
                            return this;
                        }
                        $(this).attr(attr, val1);
                        return this;
                    }
                        ;
                }
                    ;
           





        //-- Amplitude initialize
        wf_analytics.init({
            pageView: {
                name: 'Website Viewed',
                data: {
                    redirect: false // not a redirect to dashboard
                }
            },
            trackScroll: true,
            page: 'website'
        });

        // ---- Set a user logged in/out attribute in Intellimize ----
        intellimize.ready(() => {
            wf_utils.getUser((user) => {
                const isLoggedIn = user ? 'true' : 'false';
                const scope = 'user';
                // or 'pageview'
                const attributes = {
                    loggedIn: isLoggedIn
                };

                intellimize.setAttributes(scope, attributes);
            }
            );
        }
        );

   
  
        // Get UTM parameters from current URL
        function getUTMParams() {
            const urlParams = new URLSearchParams(window.location.search);
            const utmParams = {};
            ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
                if (urlParams.has(param)) {
                    utmParams[param] = urlParams.get(param);
                }
            }
            );
            return utmParams;
        }

        // Check if domain is Webflow
        function isWebflowDomain(hostname) {
            return hostname.endsWith('webflow.com') || hostname.endsWith('webflow.io');
        }

        // Check if URL already has UTM parameters
        function hasUTMParams(url) {
            return Array.from(url.searchParams.keys()).some(param => param.startsWith('utm_'));
        }

        // Apply UTM parameters to all links
        function applyStickyUTM() {
            const utmParams = getUTMParams();

            if (Object.keys(utmParams).length === 0)
                return;

            document.querySelectorAll('a').forEach(link => {
                if (link.href.startsWith('#') || link.href.startsWith('javascript:'))
                    return;

                try {
                    const url = new URL(link.href);

                    if (!isWebflowDomain(url.hostname) || hasUTMParams(url))
                        return;

                    Object.entries(utmParams).forEach(([key, value]) => {
                        url.searchParams.set(key, value);
                    }
                    );

                    link.href = url.toString();
                } catch (e) {
                    console.warn('Invalid URL:', link.href);
                }
            }
            );
        }

        // Run when DOM is loaded
        document.addEventListener('DOMContentLoaded', applyStickyUTM);

        // Run when content changes
        if (window.MutationObserver) {
            new MutationObserver(() => applyStickyUTM()).observe(document.body, {
                subtree: true,
                childList: true
            });
        }
   
        var mySwiper1 = new Swiper('#quotes-slider', {
            speed: 800,
            autoHeight: true,
            followFinger: true,
            slideToClickedSlide: false,
            slidesPerView: 1,
            spaceBetween: 80,
            mousewheel: {
                forceToAxis: true
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },
            noSwipingSelector: 'a',
            navigation: {
                nextEl: '#quotes-slide-right',
                prevEl: '#quotes-slide-left',
            },
            breakpoints: {
                // mobile landscape
                480: {
                    slidesPerView: 1,
                },
                // tablet
                768: {
                    slidesPerView: 1,
                },
                // desktop
                992: {
                    slidesPerView: 1,
                }
            }
        });

        // ----- Swiper slider configuration for Get Started Resources -----
        const mySwiper2 = new Swiper("#get-started-slider", {
            speed: 300,
            autoHeight: true,
            followFinger: true,
            slideToClickedSlide: false,
            slidesPerView: 1,
            spaceBetween: 24,
            mousewheel: {
                forceToAxis: true
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },
            noSwipingSelector: 'a',
            navigation: {
                nextEl: "#get-started-slide-right",
                prevEl: "#get-started-slide-left",
            },
            breakpoints: {
                // mobile landscape
                480: {
                    slidesPerView: 1,
                },
                // tablet
                768: {
                    slidesPerView: 2,
                },
                // desktop
                992: {
                    slidesPerView: 3,
                }
            }
        });
        //----- Global Content Hub (GCH) Slider -----
        const GCHSlider = new Swiper("#gch-slider-1", {
            slidesPerView: 1,
            spaceBetween: 24,
            speed: 300,
            autoHeight: true,
            keyboard: true,
            grabCursor: true,
            navigation: {
                nextEl: "#gch-slider-right-1",
                prevEl: "#gch-slider-left-1",
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },

        });
  
        // Function to set a cookie
        function setCookie(name, value, days) {
            const expires = new Date();
            expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
            document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
        }

        // Function to get a cookie value
        function getCookie(name) {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ')
                    c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) {
                    const value = c.substring(nameEQ.length, c.length);
                    return value;
                }
            }
            return null;
        }

        // Function to handle toaster visibility
        function handleToasterVisibility() {
            const toaster = document.querySelector('[data-updates="toaster"]');
            const closeButton = document.querySelector('[data-updates="close"]');
            const currentVersion = toaster.getAttribute('data-updates-version');

            const closedVersion = getCookie('toasterClosedVersion');

            if (closedVersion === null) {
                toaster.style.display = 'block';
            } else if (closedVersion === currentVersion) {
                toaster.style.display = 'none';
            } else {
                toaster.style.display = 'block';
            }

            closeButton.addEventListener('click', function () {
                toaster.style.display = 'none';
                setCookie('toasterClosedVersion', currentVersion, 365);
            });
        }

        // Run the function when the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', () => {
            handleToasterVisibility();
        }
        );
   