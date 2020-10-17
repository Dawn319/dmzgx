function EXPLORE() {
    var open1 = document.getElementById('EXPLORE');
    open1.style.display = ' none';
    var open2 = document.getElementById('HOME');
    open2.style.display = ' block';
}
var es = document.getElementsByClassName('form-control');
for (var i = 0; i < es.length; i++) {
    es[i].onfocus = function() {
        this.parentNode.className = this.parentNode.className.replace('control-focus', '');
        this.parentNode.className = this.parentNode.className.replace('control-highlight', '');
        this.parentNode.className += 'control-focus';
    }
    es[i].onblur = function() {
        var val;
        if (this.tagName == 'SELECT') {
            val = this.options[this.selectedIndex].text;
        } else {
            val = this.value;
        }
        if (val != '') {
            this.parentNode.className = this.parentNode.className.replace('control-focus', 'control-highlight');
        } else {
            this.parentNode.className = this.parentNode.className.replace('control-focus', '');
            this.parentNode.className = this.parentNode.className.replace('control-highlight', '');
        }
    }
}

function OPEN() {
    var open1 = document.getElementById('OPEN');
    open1.style.display = ' block';
    var home = document.getElementById('HOME');
    home.style.overflow = ' hidden';
    var closecontent = document.getElementById('modalContent');
    closecontent.className = closecontent.className.replace(' close-modal-animate', ' ');
}

function CLOSE() {
    var close1 = document.getElementById('OPEN');
    var closecontent = document.getElementById('modalContent');
    var home = document.getElementById('HOME');
    home.style.overflow = ' scroll';
    home.style.overflowX = ' hidden';
    closecontent.className = closecontent.className + ' close-modal-animate';
    setTimeout(function() {
        close1.style.display = ' none';
    }, 300);
}


function ZW() {
    document.getElementById('bct').innerHTML = "大美中国行";
    document.getElementById('archi').innerHTML = "建筑";
    document.getElementById('culture').innerHTML = "传统文化";
    document.getElementById('delicacy').innerHTML = "美食";
    document.getElementById('recommend').innerHTML = "推荐";
    document.getElementById('fr').innerHTML = "精选推荐";
    document.getElementById('js1-1').innerHTML = "故宫又称紫禁城，是明、清两代的皇宫，也是古老中国的标志和象征。当你置身于气派规整的高墙深院，能真真切切地感受到它曾经的荣耀。";
    document.getElementById('js1-2').innerHTML = "神农架群山万壑，峰峦迭翠；峡谷天雕，奇洞天成；险崖瀑飞，锦石溪流；深山老林，云流雾绕，高山平原，碧海长天，构成一幅幅山水画卷，一个个诗画长廊。";
    document.getElementById('js1-3').innerHTML = "九寨沟——世界自然遗产、国家重点风景名胜区、国家级自然保护区、国家地质公园、世界生物圈保护区网络，是中国第一个以保护自然风景为主要目的的自然保护区,东方人称之为“人间仙境。";
    document.getElementById('js1-4').innerHTML = "云南一直是中外游客旅行的首选。 浪漫的气氛，神秘的人们和悠闲的节奏使您感受到人与自然和谐共处的美丽。";
    document.getElementById('ar').innerHTML = "建筑";
    document.getElementById('js4-1').innerHTML = "大雁塔位于唐长安城晋昌坊的大慈恩寺内，大雁塔是作为现存最早、规模最大的唐代四方楼阁式砖塔。";
    document.getElementById('js4-2').innerHTML = "秦始皇陵，中国历史上第一位皇帝嬴政的陵寝，是中国历史上第一座规模庞大，设计完善的帝王陵寝。";
    document.getElementById('js4-3').innerHTML = "苏州古典园林展现了中国文化的精华，在世界造园史上具有独特的历史地位和重大的艺术价值,是中华园林文化的翘楚和骄傲。";
    document.getElementById('js4-4').innerHTML = "长城，又称万里长城，是中国古代的军事防御工事,长城不仅是中国也是世界上修建时间最长、工程量最大的一项古代防御工程。";
    document.getElementById('tc').innerHTML = "传统文化";
    document.getElementById('js2-1').innerHTML = "兵马俑，即秦始皇兵马俑，亦简称秦兵马俑或秦俑，第一批全国重点文物保护单位，第一批中国世界遗产。";
    document.getElementById('js2-2').innerHTML = "武当山，中国道教圣地，又名太和山古有“太岳”、“玄岳”、“大岳”之称。道教是中国本土宗教，以“道”为最高信仰，是世界五大宗教之一。";
    document.getElementById('js2-3').innerHTML = "蜀绣又名“川绣”，为中国四大名绣之一,蜀绣以其明丽清秀的色彩和精湛细腻的针法形成了自身的独特韵味，丰富程度居四大名绣之首。";
    document.getElementById('js2-4').innerHTML = "中国国家博物馆,位于北京市中心天安门广场东侧是历史与艺术并重，集收藏、展览、研究、考古、公共教育、文化交流于一体的综合性博物馆。";
    document.getElementById('de').innerHTML = "美食";
    document.getElementById('js3-1').innerHTML = "徽菜，是中国传统的八大菜系之一，是独具一格，自成一体的著名菜系   。徽菜是徽州六县的地方特色，其独特的地理人文环境赋予徽菜独有的味道。";
    document.getElementById('js3-2').innerHTML = "川菜是中国汉族传统的四大菜系之一、中国八大菜系之一  、中华料理集大成者。取材广泛，调味多变，菜式多样，口味清鲜，醇浓并重。";
    document.getElementById('js3-3').innerHTML = "鲁菜，是起源于山东省淄博市博山区的齐鲁风味菜系，是中国传统四大菜系中唯一的自发型菜系 ，黄河流域烹饪文化的代表 。";
    document.getElementById('js3-4').innerHTML = "粤菜即广东菜，是中国传统四大菜系、八大菜系之一。粤菜源自中原，传承了孔子所倡导的“食不厌精，脍不厌细”的中原饮食风格。";
    document.getElementById('h3-1').innerHTML = "设计";
    document.getElementById('h3-2').innerHTML = "品牌";
    document.getElementById('h3-3').innerHTML = "方案";
    document.getElementById('h3-4').innerHTML = "承诺";
    document.getElementById('p1').innerHTML = "为客户提供极致的设计服务-量身定制-一对一专属服务-丰富的经验";
    document.getElementById('p2').innerHTML = "顶尖的团队、强大的背景实力、贴心的服务、高端定制、价格实惠";
    document.getElementById('p3').innerHTML = "每一个方案都力求经典,量身定制,在各个环节倾心投入,为客户做到最好";
    document.getElementById('p4').innerHTML = "给客户提供良好的体验和极致的设计服务，集结行业专家，组成顶尖团队，为客户提供极致的设计服务";
}

function YW() {
    document.getElementById('bct').innerHTML = "Beautiful China Travel";
    document.getElementById('archi').innerHTML = "Architecture";
    document.getElementById('culture').innerHTML = "Traditional Culture";
    document.getElementById('delicacy').innerHTML = "Delicacy";
    document.getElementById('recommend').innerHTML = "Recommend";
    document.getElementById('fr').innerHTML = "Featured Recommended";
    document.getElementById('js1-1').innerHTML = "The Forbidden City, also known as the Forbidden City, was the imperial palace of the Ming and Qing dynasties, as well as a symbol and symbol of ancient China. When you are in the neat high-walled courtyard, you can truly feel its former glory.";
    document.getElementById('js1-2').innerHTML = "The mountains of Shennongjia are filled with gorges and peaks and ridges; the sky-carvings of canyons and the natural formations of strange caves; cliffs and waterfalls, Jinshi streams; A gallery of poetry and painting.";
    document.getElementById('js1-3').innerHTML = "Jiuzhaigou-World Natural Heritage, National Key Scenic Spots, National Nature Reserves, National Geological Parks, World Biosphere Reserves Network, is China's first nature reserve with the main purpose of protecting natural scenery, and it is called 'Fairyland'.";
    document.getElementById('js1-4').innerHTML = "Yunnan has always been the first choice for Chinese and foreign tourists to travel. The romantic atmosphere, mysterious people, and leisurely rhythm make you feel the beauty of harmonious coexistence between man and nature. Let's enjoy the scenery of Yunnan together.";
    document.getElementById('ar').innerHTML = "Architecture";
    document.getElementById('js4-1').innerHTML = "The Big Wild Goose Pagoda is located in the Dacien Temple in Jinchangfang, Chang'an City, Tang Dynasty. The Big Wild Goose Pagoda is the oldest and largest existing brick pagoda in the Tang Dynasty.";
    document.getElementById('js4-2').innerHTML = "The Mausoleum of the First Emperor of Qin, the mausoleum of the first emperor Yingzheng in Chinese history, is the first large-scale and well-designed mausoleum of an emperor in Chinese history.";
    document.getElementById('js4-3').innerHTML = "Suzhou classical gardens show the essence of Chinese culture, have a unique historical position and significant artistic value in the history of gardening in the world, and are the leader and pride of Chinese garden culture.";
    document.getElementById('js4-4').innerHTML = "The Great Wall, also known as the Great Wall of China, is an ancient military fortification in China. The Great Wall is not only the longest construction time and the largest amount of engineering in China, the Great Wall is an ancient defense project in the world.";
    document.getElementById('tc').innerHTML = "Traditional Culture";
    document.getElementById('js2-1').innerHTML = "Terracotta Warriors and Horses, also referred to as Qin Terracotta Warriors and Horses or Qin Warriors, are the first batch of national key cultural relics protection units and the first batch of China's World Heritage Sites.";
    document.getElementById('js2-2').innerHTML = "Wudang Mountain, the holy land of Chinese Taoism, also known as Taihe Mountain, was known as 'Taiyue', 'Xuanyue' and 'Dayue' in ancient times. Taoism is a native religion in China, with 'Tao' as the highest belief, and it is one of the five major religions in the world.";
    document.getElementById('js2-3').innerHTML = "Shu embroidery, also known as 'Chuan embroidery', is one of the four famous embroidery in China. Shu embroidery has formed its own unique charm with its bright and beautiful colors and exquisite needlework, and its richness ranks first among the four famous embroidery.";
    document.getElementById('js2-4').innerHTML = "The National Museum of China, located on the east side of Tiananmen Square in the center of Beijing, is a comprehensive museum with equal emphasis on history and art, integrating collection, exhibition, research, archeology, public education, and cultural exchanges.";
    document.getElementById('de').innerHTML = "Delicacy";
    document.getElementById('h3-1').innerHTML = "Design";
    document.getElementById('js3-1').innerHTML = "Anhui cuisine, one of the eight traditional Chinese cuisines, is a unique and self-contained famous cuisine. Anhui cuisine is a local characteristic of the six counties in Huizhou, and its unique geographical and cultural environment gives it a unique taste.";
    document.getElementById('js3-2').innerHTML = "Sichuan cuisine is one of the four traditional Chinese cuisines of the Han nationality, one of the eight Chinese cuisines, and a master of Chinese cuisine. It has a wide range of materials, changeable seasonings, diverse dishes, fresh taste and strong mellow.";
    document.getElementById('js3-3').innerHTML = "Shandong cuisine is a Qilu cuisine originated in Boshan District, Zibo City, Shandong Province. It is the only spontaneous cuisine among the four traditional Chinese cuisines and a representative of the culinary culture of the Yellow River Basin.";
    document.getElementById('js3-4').innerHTML = "Cantonese cuisine is Guangdong cuisine, one of the four and eight traditional Chinese cuisines. Cantonese cuisine originates from the Central Plains, and inherits the Central Plains eating style of 'not tired of eating fine, not tired of fine food' advocated by Confucius.";
    document.getElementById('h3-2').innerHTML = "Brand";
    document.getElementById('h3-4').innerHTML = "Program";
    document.getElementById('h3-4').innerHTML = "Vouchsafement";
    document.getElementById('p1').innerHTML = "Provide customers with the ultimate design service-tailor-made-one-to-one exclusive service-rich experience";
    document.getElementById('p2').innerHTML = "Top team, strong background strength, caring service, high-end customization, affordable price";
    document.getElementById('p3').innerHTML = "Every plan strives to be classic, tailor-made, dedicated in all aspects, and do the best for customers";
    document.getElementById('p4').innerHTML = "Provide customers with a good experience and ultimate design services, gather industry experts, form a top team, and provide customers with ultimate design services";
    // document.getElementById('bj').innerText = "Peking";
    // document.getElementById('sh').innerText = "Shanghai";
    // document.getElementById('gz').innerText = "Guangzhou";
    // document.getElementById('name').innerText = "Name";
    // document.getElementById('email').innerText = "Email";
    // document.getElementById('city').innerText = "City";
    // document.getElementById('content').innerText = "Content";
}

var index3 = 1;
auto();

function auto() {
    var slides = document.getElementsByClassName('slide3');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    if (index3 > slides.length) {
        index3 = 1;
    }
    slides[index3 - 1].style.display = ' block';
    index3++;
    setTimeout(auto, 4000);

}