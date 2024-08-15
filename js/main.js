'use strict';

const ads = document.querySelector('.ads');
const itemTitle = document.querySelectorAll('.item__title');
const items = document.querySelector('.items');
const item = document.querySelectorAll('.item');

const propsList = document.querySelectorAll('.props__list');
const propsItem = document.querySelectorAll('.props__item');

const clonePropsListthree = propsList[3].cloneNode(true);
const clonePropsListFour = propsList[4].cloneNode(true);

ads.remove();
items.insertBefore(item[1], item[0]);
items.insertBefore(item[0], item[4]);
propsList[2].append(propsItem[43], propsItem[44]);
propsItem[2].after(propsItem[14]);
propsItem[14].after(propsItem[2]);
propsList[3].replaceWith(clonePropsListFour);
propsList[4].replaceWith(clonePropsListthree);
propsList[2].before(itemTitle[3]);
propsList[5].before(itemTitle[1]);
clonePropsListthree.before(itemTitle[4]);