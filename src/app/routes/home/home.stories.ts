import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';

storiesOf('test', module).add('to Storybook', withNotes('testing notes')(() => ({
    component: Welcome,
    props: {},
})));
