export const addIcon = ((elem, index) => {
  switch (elem.id) {
    case 'MCO1403':
      elem.icon = 'icon-food';
      break;
    case 'MCO1384':
      elem.icon = 'icon-baby';
      break;
    case 'MCO40433':
      elem.icon = 'icon-show';
      break;
    case 'MCO1743':
      elem.icon = 'icon-car';
      break;
    case 'MCO1798':
      elem.icon = 'icon-hobbies';
      break;
    case 'MCO1144':
      elem.icon = 'icon-videogames';
      break;
    case 'MCO5726':
      elem.icon = 'icon-electrical';
      break;
    case 'MCO175794':
      elem.icon = 'icon-tools';
      break;
    case 'MCO1499':
      elem.icon = 'icon-industry';
      break;
    case 'MCO1182':
      elem.icon = 'icon-music';
      break;
    case 'MCO3025':
      elem.icon = 'icon-books';
      break;
    case 'MCO3937':
      elem.icon = 'icon-jewelry';
      break;
    case 'MCO180800':
      elem.icon = 'icon-health';
      break;
    default:
      elem.icon = 'icon-other';
      break;
  }
});