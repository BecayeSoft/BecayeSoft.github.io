import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/all';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarComponent} from "../../shared/components/snackbar/snackbar.component";

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {

    /**
     * Determines with text to return.
     *
     * @see shuffleText
     */
    isTextShuffled: boolean = false;

    /**
     * Whether the mobile menu is visible or not.
     *
     * @see toggleSmartphonesMenu
     */
    isMenuVisible: boolean = false;

    emailFormControl = new FormControl('', [Validators.email]);

    constructor(private _snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        gsap.config({nullTargetWarn: false});
        gsap.registerPlugin(ScrollTrigger);
    }

    ngAfterViewInit(): void {
        // parallax effect
        this.doParallax();

        // Cursor Animation
        this.animateCursor();
        this.addCursorHoverEffect();

        // Hero section animation
        this.animateVerticalLine();
        setInterval(() => {
            this.animateTyping();
        }, 2500);
        this.revealVerticalLineOnScroll();

        // Projects Animation
        this.revealProjectTitleOnScroll();

        const my_projects = document.getElementsByClassName('reveal-project');
        Array.from(my_projects).forEach(project => {
            this.revealProjectOnScroll(project);
        });

        this.animateTimelineVerticalLine();
        this.animateTimelineHorizontalLine();

        // About
        this.shakeHand();
        this.revealAboutPicture();

        // Social Media
        this.animateSocialMediaIcons();
    }

    /**
     * Animate my custom cursor
     *
     * It moves with the mouse.
     * It also disappears on scroll.
     */
    animateCursor() {
        window.addEventListener('mousemove', (event) => {
            gsap.to('.cursor', {
                opacity: 1,
                top: event.pageY + 'px',
                left: event.pageX + 'px',
            });
        });

        document.addEventListener('scroll', e => {
            let ticking = false;
            if (!ticking) {
                window.requestAnimationFrame((event) => {
                    gsap.to('.cursor', {opacity: 0});
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    /**
     * Add animation when our custom cursor is hovering
     * a title, paragraph, link, img, or SVG.
     */
    addCursorHoverEffect() {
        const tags = ['h1', 'h2', 'h3', 'h4', 'p', 'a', 'img', 'svg']
        const cursor = document.querySelector('.cursor')!;

        for (let tag of tags) {
            const my_tags = document.getElementsByTagName(tag);

            // images
            if (tag === 'img') {
                Array.from(my_tags).forEach(tag => {
                    tag.addEventListener('mouseover', () => {
                        cursor.classList.add('cursor-img-hover')
                    });
                    tag.addEventListener('mouseleave', () => {
                        cursor.classList.remove('cursor-img-hover')
                    });
                });
            }
            // links
            else if (tag === 'a') {
                Array.from(my_tags).forEach(tag => {
                    tag.addEventListener('mouseover', () => {
                        cursor.classList.add('cursor-link-hover')
                    });
                    tag.addEventListener('mouseleave', () => {
                        cursor.classList.remove('cursor-link-hover')
                    });
                });
            }
            // titles, paragraphs and SVGs
            else {
                Array.from(my_tags).forEach(tag => {
                    tag.addEventListener('mouseover', () => {
                        cursor.classList.add('cursor-hover')
                    });
                    tag.addEventListener('mouseleave', () => {
                        cursor.classList.remove('cursor-hover')
                    });
                });
            }
        }
    }

    /**
     * Handle the timeline horizontal lines animations on the different devices.
     */
    animateTimelineHorizontalLine() {
        // Animate Timeline Horizontal Line
        const tl_horizontalLine = document.getElementsByClassName('reveal-horizontal-line');
        Array.from(tl_horizontalLine).forEach(horizontalLine => {
            this.revealTimelineHLOnScroll(horizontalLine, "110%");
        });
        // Animate Timeline Horizontal Line > Screen-sm - Tablets
        const tl_horizontalLine_lg = document.getElementsByClassName('reveal-horizontal-line-sm');
        Array.from(tl_horizontalLine_lg).forEach(horizontalLine => {
            this.revealTimelineHLOnScroll(horizontalLine, "102%");
        });
        // Animate Timeline Horizontal Line > Smartphones Only
        const tl_horizontalLine_xs = document.getElementsByClassName('reveal-horizontal-line-xs');
        Array.from(tl_horizontalLine_xs).forEach(horizontalLine => {
            this.revealTimelineHLOnScroll(horizontalLine, "92%");
        });

        // Animate Timeline Last Horizontal Line
        const tl_horizontalLine_last = document.getElementsByClassName('reveal-horizontal-line-last');
        Array.from(tl_horizontalLine_last).forEach(horizontalLine => {
            this.revealTimelineHLOnScroll(horizontalLine, "58%");
        });
        // Animate Timeline Last Horizontal Line > Screen lg - Wide Tablets
        const tl_horizontalLine_last_lg = document.getElementsByClassName('reveal-horizontal-line-last-sm');
        Array.from(tl_horizontalLine_last_lg).forEach(horizontalLine => {
            this.revealTimelineHLOnScroll(horizontalLine, "50%");
        });// Animate Timeline Last Horizontal Line > Screen lg - Wide Tablets
        const tl_horizontalLine_last_xs = document.getElementsByClassName('reveal-horizontal-line-last-xs');
        Array.from(tl_horizontalLine_last_xs).forEach(horizontalLine => {
            this.revealTimelineHLOnScroll(horizontalLine, "45%");
        });
    }

    /**
     * Handle the timeline vertical lines animations on different devices.
     */
    animateTimelineVerticalLine() {
        // Animate Timeline Vertical Line
        const tl_verticalLine = document.getElementsByClassName('reveal-vertical-line');
        Array.from(tl_verticalLine).forEach(vertical_line => {
            this.revealTimelineVLOnScroll(vertical_line, 70);
        });
        // Animate Timeline Vertical Line > Smartphones Only (1st project -> Height too long)
        const tl_verticalLine_xs_first = document.getElementsByClassName('reveal-vertical-line-xs-first');
        Array.from(tl_verticalLine_xs_first).forEach(vertical_line => {
            this.revealTimelineVLOnScroll(vertical_line, 12);
        });
        // Animate Timeline Vertical Line > Smartphones Only
        const tl_verticalLine_xs = document.getElementsByClassName('reveal-vertical-line-xs');
        Array.from(tl_verticalLine_xs).forEach(vertical_line => {
            this.revealTimelineVLOnScroll(vertical_line, 41);
        });
    }

    //--------------------------------------
    // Snackbar
    //--------------------------------------
    /**
     * Show Snackbar Info Message.
     *
     * Note: I've used it when user click on "Mon blog".
     */
    openSnackBar() {
        this._snackBar.openFromComponent(SnackbarComponent, {
            duration: 3500,
            panelClass: ['bg-rose-900'],
        });
    }

    /**
     * Show Message Successfully Sent Snackbar.
     */
    onOpenThankYouSnackBar() {
        this._snackBar.open('Votre message a bien été envoyé', '', {
            duration: 1500,
            panelClass: ['bg-rose-900'],
        });
    }

    //-------------------------------------------------------------
    // GSAP Animations
    //-------------------------------------------------------------
    /**
     * Reveal Vertical Line On Page Load.
     */
    animateVerticalLine() {
        const verticalLine1 = document.getElementById('vertical-line1');

        const TL = gsap.timeline();
        TL
            .to(verticalLine1, {height: 100, duration: 1}, '+=0.2')
            .to(verticalLine1, {opacity: 0})
    }

    /**
     * Returns "console.log(name);" if isTextShuffled is true
     * or "BECAYE BALDE|" otherwise.
     *
     * @param {boolean} isTextShuffled - A boolean to determine the text to return.
     */
    shuffleText(isTextShuffled: boolean) {
        if (!isTextShuffled)
            return "console.log (name);";
        else
            return "BECAYE BALDE|";
    }

    /**
     * Typing Animation.
     */
    animateTyping() {
        // Wrap every letter in a span
        const textWrapper = document.querySelector('#my-name')!;

        // Shuffle Text
        textWrapper.innerHTML = this.shuffleText(this.isTextShuffled);
        this.isTextShuffled = !this.isTextShuffled;
        textWrapper.innerHTML = textWrapper.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");

        const TL = gsap.timeline();

        const letter = document.getElementsByClassName('letter')
        for (let i = 0; i < letter.length; i++) {
            TL.from(letter[i], {
                autoAlpha: 0,
                duration: 0.07,
                ease: "power4",
                textDecoration: 'underline',
                textDecorationColor: '#881337' //useless
            })
        }
        TL.to(letter, {opacity: 0, duration: 1})
    }

    /**
     * Reveal Vertical Line On Scroll
     */
    revealVerticalLineOnScroll() {
        const TL = gsap.timeline();
        const verticalLine2 = document.getElementById('vertical-line2');

        TL
            .to(verticalLine2, {
                height: 175,
                scrollTrigger: {
                    trigger: verticalLine2,
                    start: "bottom-=25% top+=50%",
                    end: "bottom 25%",
                    scrub: true,
                },
            })
    }

    /**
     * Reveal Project Title On Scroll
     */
    revealProjectTitleOnScroll() {
        const TL = gsap.timeline();
        const work_title = document.getElementsByClassName('work-title');

        TL.from(work_title, {
            autoAlpha: 0,
            y: -20,
            scale: 0.5,
            duration: 1,
            stagger: 0.5,
            delay: 1,
            scrollTrigger: {
                trigger: work_title,
                start: "top 50%",
                scrub: true,
            }
        })
    }

    /**
     * Reveal a project on scroll.
     *
     * @param my_project
     */
    revealProjectOnScroll(my_project: any) {
        const TL = gsap.timeline();

        TL.from(my_project, {
            autoAlpha: 0,
            y: 150,
            stagger: 0.5,
            scrollTrigger: {
                trigger: my_project,
                start: "top 95%",
                end: "bottom bottom-=18%",
                scrub: 2,
            }
        })
    }

    /**
     * Reveal Timeline Vertical Line On Scroll.
     * The argument addHeight is used to adjust height of the line
     * according to the screen size so that it reaches the icons on the timeline.
     *
     * @param timeline_VerticalLine
     * @param addHeight additional height
     */
    revealTimelineVLOnScroll(timeline_VerticalLine: any, addHeight: number) {
        const TL = gsap.timeline();
        ;

        TL.to(timeline_VerticalLine, {
            height: `calc(100% + ${addHeight}px)`,
            scrollTrigger: {
                trigger: timeline_VerticalLine,
                start: "top top+=55%",
                end: "bottom+=250 25%",
                scrub: true,
            },
        })
    }

    /**
     * Reveal Timeline Horizontal Line On Scroll.
     *
     *  The parameter width is used to create a responsive design
     *  for smartphone and tablets.
     *
     *  Example: 92% for smartphone, 102% for tablet and 110% for Laptop and Desktop.
     *
     * @param timeline_HorinzontalLine
     * @param {string} my_width the width of the horizontal line.
     */
    revealTimelineHLOnScroll(timeline_HorizontalLine: any, my_width: string) {
        const TL = gsap.timeline();

        TL.to(timeline_HorizontalLine, {
            // width: "calc(100% + 75px)",
            width: my_width,
            scrollTrigger: {
                trigger: timeline_HorizontalLine,
                start: "top top+=75%",
                end: "bottom+=50 bottom-=40%",
                scrub: true,
            },
        })
    }

    /**
     * Rotate and scale social media icons every second.
     */
    animateSocialMediaIcons() {
        const TL = gsap.timeline();
        const sm_icons = document.getElementsByClassName('sm-icon');

        setInterval(() => {
            TL.to(sm_icons, {ease: 'back(3)', rotate: "360deg", scale: 1, color: "#dbf1e5a6", stagger: 0.75});
            TL.to(sm_icons, {ease: 'back(3)', rotate: "0deg", scale: 1.3, color: "inherit", stagger: 0.75});
            TL.to(sm_icons, {ease: 'back(3)', rotate: "-360deg", scale: 1, color: "dbf1e5a6", stagger: 0.75});
            TL.to(sm_icons, {ease: 'back(3)', rotate: "0deg", scale: 1.3, color: "inherit", stagger: 0.75});
        }, 1500)
    }

    // About
    /**
     * Reveal About picture with rotation animation.
     */
    revealAboutPicture(): void {
        const TL = gsap.timeline();
        const becaye_picture = document.querySelector("#about-img-wrapper");

        TL.from(becaye_picture, {
            autoAlpha: 0,
            scale: 1.2,
            scrollTrigger: {
                start: "top 70%",
                end: "bottom bottom",
                trigger: becaye_picture,
                scrub: true,
            }
        })
            .to(becaye_picture, {rotate: "0deg"});
    }

    // Contact
    /**
     * Animate the "hellomoji" from the HTML (👋)
     * with a handshake-like animation.
     */
    shakeHand(): void {
        const TL = gsap.timeline();
        const hellomoji = document.getElementById('hellomoji');

        setInterval(() => {
            TL.to(hellomoji, {ease: 'bounce', rotate: "45deg", scale: 1.3});
            TL.to(hellomoji, {rotate: "0deg", scale: 1.1});
        }, 1000)
    }

    /**
     * Toggle the smartphone menu
     */
    toggleSmartphoneMenu() {
        this.rotateMenuButton(this.isMenuVisible);
        this.revealMenu(this.isMenuVisible);
        this.isMenuVisible = !this.isMenuVisible;
    }

    /**
     * Rotate the smartphone menu button.
     *
     * If the menu is not visible, the button is normal.
     * Else it rotates by 90deg.
     * @param {boolean} isMenuVisible - whether the menu is visible or not
     */
    rotateMenuButton(isMenuVisible: boolean) {
        const arrow = document.getElementById("menu-button");

        if (!isMenuVisible) {
            const TL = gsap.timeline();
            TL.to(arrow, {rotate: "90deg"})
                .to(arrow, {marginLeft: "-1rem"});
        } else {
            const TL = gsap.timeline();
            TL.to(arrow, {rotate: 0})
                .to(arrow, {marginLeft: 0});
        }
    }

    /**
     * Reveal the smartphone menu.
     *
     * If the menu is not visible, show it
     * Else hide it.
     * @param {boolean} isMenuVisible - A boolean that determines if we should show or hide the menu.
     */
    revealMenu(isMenuVisible: boolean) {
        const mobileMenuWrapper = document.getElementById('mobile-menu-wrapper');
        const mobileMenu = document.getElementById('mobile-menu');

        if (!isMenuVisible) {
            gsap.to(mobileMenuWrapper, {backgroundColor: 'rgba(0,0,0,0.5)'})
            gsap.fromTo(mobileMenu, {autoAlpha: 0}, {autoAlpha: 1, duration: 1});
        } else {
            gsap.to(mobileMenuWrapper, {background: 'transparent'});
            gsap.to(mobileMenu, {opacity: 0});
        }
    }

    /**
     * Apply Parallax Effect when scrolling from Hero to projects section.
     */
    doParallax() {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".parallax").forEach((section: any, i) => {
            section.style.backgroundPosition = `50%  ${-innerHeight / 2}px`;
            gsap.to(section, {
                backgroundPosition: `50%  ${innerHeight / 2}px`,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    scrub: true
                }
            });
        });
    }
}
