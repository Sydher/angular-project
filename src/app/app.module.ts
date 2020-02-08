// Modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Components
import { AppComponent } from "./app.component";
import { AccueilComponent } from "./pages/generale/accueil/accueil.component";
import { Page404Component } from "./pages/generale/page404/page404.component";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        AccueilComponent,
        Page404Component
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
