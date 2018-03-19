import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';


var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), "85%");
new RevealOnScroll($('.testemonial'), '65%');

var stickyHeader = new StickyHeader();