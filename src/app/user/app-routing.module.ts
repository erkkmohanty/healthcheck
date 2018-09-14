import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { HealthComponent } from "src/app/health/health.component";
import { PageNotFoundComponent } from "src/app/page-not-found.component";
import { LogComponent } from "src/app/log/log.component";
import { SharedModule } from "src/app/shared/shared.module";

const ROUTES = [{ path: 'health', component: HealthComponent },
{ path: 'logs', component: LogComponent },
{ path: '', redirectTo: 'health', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES, { useHash: true }), SharedModule],
    exports: [RouterModule],
    declarations: [HealthComponent, LogComponent, PageNotFoundComponent]
})
export class AppRoutingModule {

}