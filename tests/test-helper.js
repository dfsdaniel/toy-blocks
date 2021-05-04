import Application from 'ember-toy-blocks/app';
import config from 'ember-toy-blocks/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
