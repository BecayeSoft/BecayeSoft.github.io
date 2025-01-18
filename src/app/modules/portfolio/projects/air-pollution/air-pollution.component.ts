import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-air-pollution',
	templateUrl: './air-pollution.component.html',
	styleUrls: ['./air-pollution.component.scss']
})
export class AirPollutionComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		const slidesContainer = document.getElementById("slides-container");
		const slide = document.querySelector(".slide");
		const prevButton = document.getElementById("slide-arrow-prev");
		const nextButton = document.getElementById("slide-arrow-next");

		if ( prevButton && nextButton && slidesContainer && slide ) {
			nextButton.addEventListener("click", () => {
				const slideWidth = slide.clientWidth;
				slidesContainer.scrollLeft += slideWidth;
			});

			prevButton.addEventListener("click", () => {
				const slideWidth = slide.clientWidth;
				slidesContainer.scrollLeft -= slideWidth;
			});
		}
	}

}
