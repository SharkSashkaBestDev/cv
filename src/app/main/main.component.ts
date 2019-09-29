import { Component, OnInit } from '@angular/core';
import {Skill} from '../model/skill.model';
import { Experience } from '../model/experience.model';
import { Education } from '../model/education.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [
    './main.component.scss'
  ]
})
export class MainComponent implements OnInit {

  phoneFormatted = '+380 (63) 229-95-11';
  phone = '+380632299511';
  emails = [
    'myagkiyalexandr@gmail.com',
    'myagkiyalexandr@hotmail.com'
  ];
  birth = '1994-05-24';
  linkedin = 'https://www.linkedin.com/in/myagkiy-alexandr-889132b2';
  addressLink = 'https://goo.gl/maps/zutxijhrL4EX6Afy6';

  skills = [
    new Skill('1', 'Java SE', 4),
    new Skill('2', 'Java EE', 3),
    new Skill('3', 'Spring Boot', 3),
    new Skill('4', 'JSF', 3),
    new Skill('5', 'JSP', 3),
    new Skill('6', 'Angular', 4),
    new Skill('7', 'HTML', 4),
    new Skill('8', 'JavaScript', 4),
    new Skill('9', 'AEM', 4),
    new Skill('10', 'JUnit', 3),
    new Skill('11', 'Relational Databases', 4),
    new Skill('12', 'MongoDB', 3),
    new Skill('13', 'Python', 3),
    new Skill('14', 'CSS/LESS', 4),
    new Skill('15', 'Android development', 3),
    new Skill('16', 'Linux, Windows, OSX', 4),
    new Skill('17', '1C', 3),
    new Skill('18', 'Git', 4),
    new Skill('19', 'Adaptability', 5)
  ];

  experiences = [
    new Experience('1', '2014/06 — 2018/07', 'Full-stack developer at CyberSystem Group', [ 'Linux and network administration', '1C-based software development', 'Web and Java server-based software development', 'Projects deployment and troubleshooting', 'Technical support' ]),
    new Experience('2', '2018/05 — now', 'AEM & Hybris developer at TechMatesGroup', [ 'AEM components development & support', 'Documentation support', 'AEM authoring', 'Hybris development', 'Hybris administration' ]),
  ];

  educations = [
    new Education('1', '2010/09 — 2014/07', 'CIST KNEU, Junior Specialist degree, Software development', 'Junior Specialist degree in Software development'),
    new Education('2', '2014/09 — 2016/06', 'National University of Food Technologies, Bachelor degree, Software development', 'Bachelor degree in Software development'),
    new Education('3', '2010/09 — 2014/07', 'National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute", Specialist degree, Software development', 'Specialist degree in Software development')
  ]

  constructor() { }

  ngOnInit() {
  }

  getSkillMastery(mastery: number) {
    let res = 'Advanced';

    switch (mastery) {
      case 0:
        res = 'Don\'t know';
        break;
      case 1:
        res = 'Very bad';
        break;
      case 2:
        res = 'Bad';
        break;
      case 3:
        res = 'Intermediate';
        break;
      case 4:
        res = 'Good';
        break;
    }

    return res;
  }

}
