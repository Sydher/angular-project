import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccueilComponent } from "./pages/generale/accueil/accueil.component";
import { Page404Component } from "./pages/generale/page404/page404.component";

const routes: Routes = [
    // Page d'accueil
    {
        path: "",
        component: AccueilComponent
    },
    // Page 404
    {
        path: "not-found",
        component: Page404Component
    },
    {
        path: "**",
        redirectTo: "not-found"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
