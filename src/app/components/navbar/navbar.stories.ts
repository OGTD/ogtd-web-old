import { storiesOf, addDecorator } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs } from '@storybook/addon-knobs';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';

import { NavbarComponent } from './navbar.component';

storiesOf('Navbar', module).add('Default', () => ({
    component: NavbarComponent,
    props: {},
    moduleMetadata: {
        imports: [
            MatToolbarModule,
            MatIconModule,
            MatButtonModule
        ]

    }
}));
