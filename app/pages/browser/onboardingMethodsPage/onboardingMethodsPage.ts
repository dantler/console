import {Page, NavController} from "ionic-angular";
import {OnInit} from "@angular/core";
import {OnboardingDataService} from "../../../providers/onboardingDataService";
import {OnboardingMethodPage} from "../onboardingMethodPage/onboardingMethodPage";
import {doAlert} from "../../../model/utils";

@Page({
    templateUrl: "build/pages/browser/onboardingMethodsPage/onboardingMethodsPage.html"
})
export class OnboardingMethodsPage implements OnInit {

    // page navigations
    private onboardingMethodPage = OnboardingMethodPage

    // onboarding methods in the repository.
    onboardingMethods: string[] = null;
    error: string = null;

    // ctor
    constructor(private onboardingDataService: OnboardingDataService,
        private nav: NavController) {
    }

    // handles page init.
    ngOnInit() {
        this.onboardingDataService.initiateGetOnboardingMethodsList()
            .then((methods) => {
                this.onboardingMethods = methods;
            }).catch((err) => {
                // there was an error. display it on screen.
                console.log(JSON.stringify(err));
                doAlert(JSON.stringify(err));
            });
    }
}
