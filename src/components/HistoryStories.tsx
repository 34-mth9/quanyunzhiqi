import React, { useState } from 'react';
import { ArrowLeft, Clock, User, MapPin, Search, ChevronDown } from 'lucide-react';

interface HistoryStoriesProps {
  onBack: () => void;
}

interface Story {
  id: string;
  title: string;
  period: string;
  dynasty: string;
  description: string;
  content: string;
  image: string;
}

interface Celebrity {
  id: string;
  name: string;
  period: string;
  title: string;
  description: string;
  image: string;
  stories: string[];
}

interface SpringStory {
  id: string;
  springName: string;
  title: string;
  description: string;
  image: string;
  legend: string;
}

const HistoryStories: React.FC<HistoryStoriesProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [selectedDynasty, setSelectedDynasty] = useState('全部');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [selectedCelebrity, setSelectedCelebrity] = useState<Celebrity | null>(null);
  const [selectedSpring, setSelectedSpring] = useState<SpringStory | null>(null);

  const dynasties = ['全部', '春秋战国', '秦汉', '魏晋南北朝', '隋唐', '宋元', '明清', '近现代'];

  const stories: Story[] = [
    {
      id: '1',
      title: '齐国建都临淄',
      period: '公元前859年',
      dynasty: '春秋战国',
      description: '齐太公姜子牙受封齐地，建都临淄，开启了齐国800年的辉煌历史',
      content: '详细故事内容待补充...',
      image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '2',
      title: '济南府的设立',
      period: '金代',
      dynasty: '宋元',
      description: '金代设立济南府，济南正式成为重要的政治文化中心',
      content: '详细故事内容待补充...',
      image: 'https://images.pexels.com/photos/161154/temple-china-chinese-architecture-161154.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const celebrities: Celebrity[] = [
    {
      id: '1',
      name: '李清照',
      period: '1084-1155',
      title: '宋代女词人',
      description: '号易安居士，济南章丘人，宋代著名女词人，婉约词派代表',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      stories: ['《声声慢》的创作背景', '与赵明诚的爱情故事', '南渡后的颠沛生活']
    },
    {
      id: '2',
      name: '辛弃疾',
      period: '1140-1207',
      title: '南宋豪放派词人',
      description: '字幼安，号稼轩，济南历城人，南宋豪放派词人，抗金英雄',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      stories: ['青年时期的抗金经历', '《青玉案·元夕》的创作', '晚年的田园生活']
    },
    {
      id: '3',
      name: '孔子',
      period: '公元前551-479',
      title: '春秋时期思想家',
      description: '名丘，字仲尼，春秋时期鲁国人，儒家学派创始人',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
      stories: ['周游列国的经历', '教育思想的形成', '与济南的历史渊源']
    }
  ];

  const springSories: SpringStory[] = [
    {
      id: '1',
      springName: '趵突泉',
      title: '天下第一泉的传说',
      description: '相传趵突泉是龙王的三个儿子化身而成',
      image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800',
      legend: '相传很久以前，济南大旱三年，民不聊生。东海龙王得知后，派遣三个儿子前来济南救民于水火。三位龙子到达济南后，化身为三股清泉，日夜不停地向上喷涌，为百姓提供甘甜的泉水。因为泉水喷涌时发出"趵突"的声音，故名趵突泉。泉水清澈甘甜，冬暖夏凉，被誉为"天下第一泉"。'
    },
    {
      id: '2',
      springName: '黑虎泉',
      title: '黑虎救泉的故事',
      description: '传说有黑虎卧于泉边，保护泉水不被污染',
      image: 'https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=800',
      legend: '传说古时候，有一只神虎守护着这眼泉水。每当有人想要污染泉水或者破坏泉池时，黑虎就会现身阻止。泉水从虎头形状的石雕中喷涌而出，声如虎啸，故名黑虎泉。当地人相信，只要黑虎还在守护，泉水就永远不会干涸，济南的泉水文化也会世代传承下去。'
    },
    {
      id: '3',
      springName: '大明湖',
      title: '大明湖的形成传说',
      description: '众泉汇聚而成的天然湖泊，有着"四面荷花三面柳"的美景',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      legend: '大明湖并非天然湖泊，而是由众多泉水汇聚而成。相传在很久以前，济南的泉水过于丰沛，经常泛滥成灾。为了治理水患，古人在城北挖掘了一个巨大的湖泊，让众泉之水汇聚于此。湖水清澈如镜，四周种植荷花和垂柳，形成了"四面荷花三面柳，一城山色半城湖"的绝美景色。湖中还有历下亭、汇泉堂等古迹，文人墨客常在此吟诗作赋。'
    },
    {
      id: '4',
      springName: '珍珠泉',
      title: '珍珠泉的神奇传说',
      description: '泉水中冒出的气泡如珍珠般晶莹剔透',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      legend: '传说古时有一位美丽的仙女，因为思念人间的恋人，每日以泪洗面。她的眼泪滴落人间，化作了这眼清泉。泉水中不断冒出的气泡，就是仙女思念的眼泪化成的珍珠。当地人说，如果你在泉边许愿，泉水中的"珍珠"会帮你实现愿望。因此珍珠泉也被称为"许愿泉"，吸引了无数有情人前来祈福。'
    },
    {
      id: '5',
      springName: '五龙潭',
      title: '五龙治水的传说',
      description: '五条神龙共同治理水患，造福济南百姓',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      legend: '相传古时济南水患频发，玉皇大帝派遣五条神龙前来治水。五龙各司其职：青龙主东方，掌管春水；白龙主西方，掌管秋水；红龙主南方，掌管夏水；黑龙主北方，掌管冬水；黄龙居中央，统领四方。五龙合力，终于制服了水患，并在此地留下了五个相连的泉池，就是今天的五龙潭。每个泉池都有不同的特色，象征着五龙的不同神力。'
    },
    {
      id: '6',
      springName: '百脉泉',
      title: '百脉泉的奇观传说',
      description: '泉底涌出无数水脉，如同大地的血管',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      legend: '传说大地之母为了滋养济南这片土地，在地下布下了无数条水脉，就像人体的血管一样。百脉泉就是这些水脉的汇聚点，泉底可以看到无数条细小的水流涌出，形成了"百脉寒泉珍珠滚"的奇观。古人认为，百脉泉是大地的心脏，只要它还在跳动，济南就会永远充满生机。'
    },
    {
      id: '7',
      springName: '漱玉泉',
      title: '李清照与漱玉泉',
      description: '女词人李清照常在此漱口洗玉，因此得名',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      legend: '相传宋代女词人李清照居住在济南时，经常到这眼泉水边洗漱。泉水清澈甘甜，李清照用它漱口后，觉得口齿留香，诗思泉涌。她常常在泉边吟诗作词，创作了许多传世佳作。后人为了纪念这位才女，将此泉命名为"漱玉泉"，寓意泉水如玉般纯净，能够洗涤心灵，启发诗意。'
    },
    {
      id: '8',
      springName: '金线泉',
      title: '金线泉的神奇现象',
      description: '泉水中出现金色线条，如同天然的艺术品',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      legend: '传说古时有一位织女下凡，在济南与一位书生相恋。为了表达爱意，织女将自己的金丝带投入泉中，化作了一条条金色的水线。这些金线在阳光照射下闪闪发光，美不胜收。后来织女被召回天庭，但她的金线永远留在了泉中，成为了爱情忠贞的象征。人们说，如果能在金线泉中看到完整的金线，就会获得美满的爱情。'
    }
  ];

  const greatWallStories = [
    {
      id: '1',
      title: '齐长城的修建',
      period: '春秋战国时期',
      description: '齐国为防御楚、鲁等国入侵而修建的军事防御工程',
      image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: '春秋战国时期，齐国为了抵御南方楚国和西南鲁国的入侵，开始修建长城。这是中国历史上最早的长城建设工程，比秦长城早了400多年。'
    },
    {
      id: '2',
      title: '孟姜女哭长城',
      period: '秦代传说',
      description: '虽然传说发生在秦长城，但在齐长城也有相似的民间故事',
      image: 'https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: '在齐长城沿线，也流传着类似孟姜女哭长城的故事。当地人说，长城的修建需要大量劳力，许多家庭因此妻离子散，留下了无数悲伤的传说。'
    },
    {
      id: '3',
      title: '锦阳关的传说',
      period: '春秋战国时期',
      description: '齐长城重要关隘，见证了无数历史风云',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: '锦阳关是齐长城上的重要关隘，扼守着齐鲁两国的交通要道。这里发生过无数次战斗，也见证了和平时期的商贸往来。'
    }
  ];

  const filteredStories = selectedDynasty === '全部' 
    ? stories 
    : stories.filter(story => story.dynasty === selectedDynasty);

  if (selectedStory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <button
              onClick={() => setSelectedStory(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回历史长廊
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">{selectedStory.title}</h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{selectedStory.period}</span>
              <span>{selectedStory.dynasty}</span>
            </div>
            <p className="text-lg leading-relaxed">{selectedStory.content}</p>
          </div>
        </div>
      </div>
    );
  }

  if (selectedCelebrity) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <button
              onClick={() => setSelectedCelebrity(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回名士风流
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img src={selectedCelebrity.image} alt={selectedCelebrity.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h1 className="text-3xl font-bold mb-2">{selectedCelebrity.name}</h1>
                  <p className="text-lg">{selectedCelebrity.title}</p>
                  <p className="text-sm opacity-90">{selectedCelebrity.period}</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed mb-6">{selectedCelebrity.description}</p>
              <h3 className="text-xl font-bold mb-4">相关故事</h3>
              <div className="space-y-2">
                {selectedCelebrity.stories.map((story, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    {story}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedSpring) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <button
              onClick={() => setSelectedSpring(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回泉城记忆
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img src={selectedSpring.image} alt={selectedSpring.springName} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h1 className="text-3xl font-bold mb-2">{selectedSpring.springName}</h1>
                  <p className="text-lg">{selectedSpring.title}</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed mb-6">{selectedSpring.description}</p>
              <h3 className="text-xl font-bold mb-4">传说故事</h3>
              <p className="text-gray-700 leading-relaxed">{selectedSpring.legend}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === 'history') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <button
              onClick={() => setActiveSection(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回济南故事
            </button>
            <h1 className="text-3xl font-bold text-gray-900">历史长廊</h1>
            <p className="text-gray-600 mt-2">千年春秋，见证济南历史变迁</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-6">
            <div className="relative">
              <select
                value={selectedDynasty}
                onChange={(e) => setSelectedDynasty(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {dynasties.map(dynasty => (
                  <option key={dynasty} value={dynasty}>{dynasty}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedStory(story)}
              >
                <div className="relative h-48">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                      {story.dynasty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {story.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === 'celebrities') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <button
              onClick={() => setActiveSection(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回济南故事
            </button>
            <h1 className="text-3xl font-bold text-gray-900">名士风流</h1>
            <p className="text-gray-600 mt-2">探访名士，感受文人风骨</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {celebrities.map((celebrity) => (
              <div
                key={celebrity.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedCelebrity(celebrity)}
              >
                <div className="relative h-48">
                  <img src={celebrity.image} alt={celebrity.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{celebrity.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{celebrity.title}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">{celebrity.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    {celebrity.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === 'springs') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <button
              onClick={() => setActiveSection(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回济南故事
            </button>
            <h1 className="text-3xl font-bold text-gray-900">泉城记忆</h1>
            <p className="text-gray-600 mt-2">泉韵往事，聆听泉水的故事</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {springSories.map((spring) => (
              <div
                key={spring.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => setSelectedSpring(spring)}
              >
                <div className="relative h-48">
                  <img src={spring.image} alt={spring.springName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{spring.springName}</h3>
                      <p className="text-sm opacity-90">{spring.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm line-clamp-2">{spring.description}</p>
                  <button className="mt-3 text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2 text-sm">
                    了解传说
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === 'greatwall') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <button
              onClick={() => setActiveSection(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回济南故事
            </button>
            <h1 className="text-3xl font-bold text-gray-900">长城往事</h1>
            <p className="text-gray-600 mt-2">齐边风云，追忆长城岁月</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {greatWallStories.map((story, index) => (
              <div key={story.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                      {story.period}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{story.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {story.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回主页
          </button>
          <h1 className="text-4xl font-bold text-gray-900">济南故事</h1>
          <p className="text-xl text-gray-600 mt-2">泉涌千年，故事在济南的街巷中流淌着</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 历史长廊 */}
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() => setActiveSection('history')}
          >
            <div className="relative h-64">
              <img 
                src="https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="历史长廊" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">历史长廊</h2>
                  <p className="text-lg opacity-90">穿越千年时光，探寻济南历史足迹</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                从春秋战国到近现代，济南见证了中华文明的兴衰更替。在这里，您可以按朝代检索，深入了解每个历史时期的重要事件和文化变迁。
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2">
                千年春秋
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* 名士风流 */}
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() => setActiveSection('celebrities')}
          >
            <div className="relative h-64">
              <img 
                src="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="名士风流" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">名士风流</h2>
                  <p className="text-lg opacity-90">文人墨客，风流千古</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                李清照的婉约词章，辛弃疾的豪放情怀，孔子的儒家思想...济南孕育了无数文化名人，他们的故事至今传颂不衰。
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2">
                探访名士
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* 泉城记忆 */}
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() => setActiveSection('springs')}
          >
            <div className="relative h-64">
              <img 
                src="https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="泉城记忆" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">泉城记忆</h2>
                  <p className="text-lg opacity-90">七十二泉的传说与故事</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                每一眼泉水都有自己的故事，从趵突泉的龙王传说到黑虎泉的神兽守护，这些美丽的传说构成了济南独特的泉水文化。
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2">
                泉韵往事
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* 长城往事 */}
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() => setActiveSection('greatwall')}
          >
            <div className="relative h-64">
              <img 
                src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="长城往事" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">长城往事</h2>
                  <p className="text-lg opacity-90">齐长城的历史变迁</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                作为中国最古老的长城，齐长城见证了春秋战国的烽火岁月。从修建到废弃，从军事要塞到文化遗产，每一段城墙都诉说着历史的沧桑。
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2">
                齐边风云
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryStories;