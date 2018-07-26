(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{624:function(n,s,a){"use strict";a.r(s),a.d(s,"sources",function(){return e});var e=[{filename:"component.ts",contents:{raw:a(801),highlighted:a(800)}},{filename:"template.html",contents:{raw:a(799),highlighted:a(798)}},{filename:"module.ts",contents:{raw:a(797),highlighted:a(796)}}]},796:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},797:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"},798:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span>\n  [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n  [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n  [<span class="hljs-attribute">dayStartHour</span>]=<span class="hljs-value">"9"</span>\n  [<span class="hljs-attribute">dayEndHour</span>]=<span class="hljs-value">"17"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>'},799:function(n,s){n.exports='<mwl-calendar-day-view\n  [viewDate]="viewDate"\n  [events]="events"\n  [dayStartHour]="9"\n  [dayEndHour]="17">\n</mwl-calendar-day-view>'},800:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component, ChangeDetectionStrategy } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CalendarEvent } from <span class="hljs-string">\'angular-calendar\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  view: <span class="hljs-built_in">string</span> = <span class="hljs-string">\'day\'</span>;\n\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  events: CalendarEvent[] = [];\n}\n'},801:function(n,s){n.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent } from 'angular-calendar';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html'\n})\nexport class DemoComponent {\n  view: string = 'day';\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [];\n}\n"}}]);