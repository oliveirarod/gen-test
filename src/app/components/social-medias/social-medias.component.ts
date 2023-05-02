import { Component, OnInit } from "@angular/core";

import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-social-medias",
  templateUrl: "./social-medias.component.html",
  styleUrls: ["./social-medias.component.scss"],
})
export class SocialMediasComponent implements OnInit {
  faFacebook = faFacebookF;
  faTwitter = faTwitter;
  faGooglePlus = faGooglePlusG;
  faInstagram = faInstagram;
  faLinkedin = faLinkedinIn;

  constructor() {}

  ngOnInit(): void {}
}
