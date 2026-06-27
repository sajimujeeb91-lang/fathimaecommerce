import { Component } from '@angular/core';
import { Carousel } from "../../components/carousal/carousel";
import { Accordion } from "../../components/accordion/accordion";

@Component({
  selector: 'app-home',
  imports: [Carousel, Accordion],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
