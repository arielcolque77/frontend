import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {TextFieldModule} from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({

    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        TextFieldModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
        MatSnackBarModule,
        ScrollingModule
    ],
    exports:[
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        TextFieldModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
        MatSnackBarModule,
        ScrollingModule
    ]

})

export class materialModule {}