import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';

@Component({
  selector: 'changestyle-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/changestyle.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})

@RouteConfig([

].concat(CliRouteConfig))

export class ChangestyleApp {
  public data: any =
      {
        'title': 'I find over a long period of time that',
        'order': [
          'conserver',
          'originator'
        ],
        'scale': {
          'min': 0,
          'max': 3
        },
        'questions': [
          {
            'number': 1,
            'a': 'I am good at generating new ideas',
            'b': 'I am good at building upon existing ideas',
            'order': 'ba'
          },
          {
            'number': 2,
            'a': 'I become bored easily with routine tasks',
            'b': 'I can perform long detailed tasks without boredom',
            'order': 'ba'
          },
          {
            'number': 3,
            'a': 'I am good with details',
            'b': 'I can see the big picture',
            'order': 'ab'
          },
          {
            'number': 4,
            'a': 'I value originality',
            'b': 'I value practicality',
            'order': 'ba'
          },
          {
            'number': 5,
            'a': 'I prefer to follow the book',
            'b': 'I prefer to make it up as I go along',
            'order': 'ab'
          },
          {
            'number': 6,
            'a': 'I like to try out new and untried solutions',
            'b': 'I like to try practical solutions',
            'order': 'ba'
          },
          {
            'number': 7,
            'a': 'I prefer to work on one project at a time',
            'b': 'I prefer to work on several projects simultaneously',
            'order': 'ab'
          },
          {
            'number': 8,
            'a': 'I produce many ideas, some of which may be unworkable',
            'b': 'I produce a few relevant and proven ideas',
            'order': 'ba'
          },
          {
            'number': 9,
            'a': 'I believe policies should be challenged',
            'b': 'I believe policies should be followed',
            'order': 'ba'
          },
          {
            'number': 10,
            'a': 'I promote harmony in groups',
            'b': 'I promote the sharing of different opinions in groups',
            'order': 'ab'
          },
          {
            'number': 11,
            'a': 'I seek familiarity',
            'b': 'I seek adventure',
            'order': 'ab'
          },
          {
            'number': 12,
            'a': 'I complete projects in a roundabout way',
            'b': 'I complete projects in a step-by-step fashion',
            'order': 'ba'
          },
          {
            'number': 13,
            'a': 'I like doing things in a familiar way',
            'b': 'I like doing things differently each time',
            'order': 'ab'
          },
          {
            'number': 14,
            'a': 'I like to hand off a project once I know it can be done',
            'b': 'I like to follow a project through to the end',
            'order': 'ba'
          },
          {
            'number': 15,
            'a': 'I prefer creating something new',
            'b': 'I prefer improving upon something that already exists',
            'order': 'ba'
          },
          {
            'number': 16,
            'a': 'I appreciate tradition',
            'b': 'I appreciate change',
            'order': 'ab'
          },
          {
            'number': 17,
            'a': 'I like working on cutting-edge issues',
            'b': 'I like working on relevant day-to-day issues',
            'order': 'ba'
          },
          {
            'number': 18,
            'a': 'I make decisions based on actual fact',
            'b': 'I make decisions based on my intuition',
            'order': 'ab'
          },
          {
            'number': 19,
            'a': 'I prefer written instructions',
            'b': 'I prefer picture instructions',
            'order': 'ab'
          },
          {
            'number': 20,
            'a': 'I respond to situations in a measured way',
            'b': 'I respond to situations spontaneously',
            'order': 'ab'
          }
        ]
      };

  public originator: number;
  public conserver: number;
  public finalScore: number;

  process(row, index) {
    row.selected = index;

    if (row.order === 'ab')
    {
      row.conserver = 3 - index;
      row.originator = index;
    } else {
      row.conserver = index;
      row.originator = 3 - index;
    }

    this.recalculate();
  }

  recalculate() {
    var conserver = 0;
    var originator = 0;

    for (var index in this.data.questions) {
      var row = this.data.questions[index];

      if (row.conserver)
        conserver += row.conserver;

      if (row.originator)
        originator += row.originator;
    }

    this.conserver = conserver;
    this.originator = originator;
    this.finalScore = Math.abs(conserver - originator);
  }
}
