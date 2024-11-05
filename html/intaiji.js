const characterMap = {
	亞: "亜",
	啞: "唖",
	瘂: "唖",
	惡: "悪",
	蘆: "芦",
	鰺: "鯵",
	壓: "圧",
	菴: "庵",
	葊: "庵",
	桉: "案",
	圍: "囲",
	爲: "為",
	醫: "医",
	毓: "育",
	弌: "一",
	壹: "壱",
	稻: "稲",
	囙: "因",
	婣: "姻",
	飮: "飲",
	婬: "淫",
	滛: "淫",
	隱: "隠",
	阴: "陰",
	隂: "陰",
	夘: "卯",
	丒: "丑",
	噓: "嘘",
	鬱: "欝",
	廐: "厩",
	廏: "厩",
	廄: "厩",
	睿: "叡",
	營: "営",
	暎: "映",
	曵: "曳",
	榮: "栄",
	頴: "穎",
	偀: "英",
	衞: "衛",
	咏: "詠",
	驛: "駅",
	圓: "円",
	圎: "円",
	椻: "堰",
	焰: "焔",
	烟: "煙",
	緣: "縁",
	艷: "艶",
	豔: "艶",
	豓: "艶",
	鈆: "鉛",
	鹽: "塩",
	汙: "汚",
	奧: "奥",
	徃: "往",
	應: "応",
	橫: "横",
	歐: "欧",
	毆: "殴",
	鶯: "鴬",
	鸎: "鴬",
	鷗: "鴎",
	黃: "黄",
	堽: "岡",
	崗: "岡",
	冲: "沖",
	溫: "温",
	穩: "穏",
	丅: "下",
	假: "仮",
	價: "価",
	芲: "花",
	譁: "嘩",
	蚉: "蚊",
	螡: "蚊",
	蟁: "蚊",
	峩: "峨",
	畫: "画",
	畵: "画",
	卧: "臥",
	會: "会",
	觧: "解",
	囘: "回",
	囬: "回",
	壞: "壊",
	廽: "廻",
	迴: "廻",
	恠: "怪",
	懷: "懐",
	畍: "界",
	繪: "絵",
	蠏: "蟹",
	开: "開",
	堦: "階",
	蛽: "貝",
	崕: "崖",
	槩: "概",
	槪: "概",
	礙: "碍",
	盖: "蓋",
	葢: "蓋",
	柹: "柿",
	蠣: "蛎",
	鉤: "鈎",
	擴: "拡",
	攪: "撹",
	殼: "殻",
	壳: "殻",
	覺: "覚",
	甪: "角",
	爀: "赫",
	焃: "赫",
	學: "学",
	斈: "学",
	斅: "学",
	斆: "学",
	嶽: "岳",
	樂: "楽",
	澙: "潟",
	鎋: "轄",
	兠: "兜",
	竈: "竃",
	灶: "竃",
	釡: "釜",
	鐮: "鎌",
	劆: "鎌",
	栢: "柏",
	蘐: "萱",
	蕿: "萱",
	鬻: "粥",
	乹: "乾",
	亁: "乾",
	勸: "勧",
	卷: "巻",
	寬: "寛",
	榦: "幹",
	欵: "款",
	歀: "款",
	歡: "歓",
	灌: "潅",
	罐: "缶",
	缻: "缶",
	觀: "観",
	諫: "諌",
	鑒: "鑑",
	鍳: "鑑",
	閒: "間",
	關: "関",
	閞: "関",
	陷: "陥",
	舘: "館",
	巖: "巌",
	嵓: "巌",
	鴈: "雁",
	鳫: "雁",
	顏: "顔",
	憙: "喜",
	憘: "喜",
	囍: "喜",
	噐: "器",
	竒: "奇",
	旣: "既",
	朞: "期",
	棊: "棋",
	弃: "棄",
	歸: "帰",
	皈: "帰",
	氣: "気",
	槼: "規",
	龜: "亀",
	龟: "亀",
	僞: "偽",
	冝: "宜",
	戲: "戯",
	戱: "戯",
	犧: "犠",
	螘: "蟻",
	匊: "掬",
	卻: "却",
	腳: "脚",
	坵: "丘",
	竆: "窮",
	匑: "窮",
	穷: "窮",
	糺: "糾",
	舊: "旧",
	厺: "去",
	據: "拠",
	擧: "挙",
	舉: "挙",
	虛: "虚",
	虗: "虚",
	鱼: "魚",
	亰: "京",
	俠: "侠",
	恊: "協",
	旪: "協",
	呌: "叫",
	峽: "峡",
	强: "強",
	勥: "強",
	犟: "強",
	挾: "挟",
	敎: "教",
	槗: "橋",
	桥: "橋",
	况: "況",
	狹: "狭",
	胷: "胸",
	鄕: "郷",
	曉: "暁",
	惞: "欣",
	俽: "欣",
	琹: "琴",
	珡: "琴",
	觔: "筋",
	竻: "筋",
	俱: "倶",
	區: "区",
	軀: "躯",
	驅: "駆",
	駈: "駆",
	敺: "駆",
	庽: "寓",
	鞾: "靴",
	漥: "窪",
	桒: "桑",
	枽: "桑",
	鍫: "鍬",
	勳: "勲",
	勛: "勲",
	薰: "薫",
	羣: "群",
	諬: "啓",
	啟: "啓",
	唘: "啓",
	啔: "啓",
	徑: "径",
	逕: "径",
	惠: "恵",
	憓: "恵",
	僡: "恵",
	憇: "憩",
	攜: "携",
	擕: "携",
	溪: "渓",
	谿: "渓",
	經: "経",
	繼: "継",
	繫: "繋",
	莖: "茎",
	荆: "荊",
	螢: "蛍",
	輕: "軽",
	頸: "頚",
	鷄: "鶏",
	雞: "鶏",
	藝: "芸",
	秇: "芸",
	缺: "欠",
	缼: "欠",
	决: "決",
	儉: "倹",
	劍: "剣",
	劔: "剣",
	劒: "剣",
	剱: "剣",
	釼: "剣",
	劎: "剣",
	圈: "圏",
	檢: "検",
	撿: "検",
	權: "権",
	獻: "献",
	縣: "県",
	臤: "賢",
	險: "険",
	顯: "顕",
	驗: "験",
	騐: "験",
	鹼: "鹸",
	碱: "鹸",
	醎: "鹸",
	鹹: "鹸",
	厡: "原",
	嚴: "厳",
	减: "減",
	絝: "袴",
	脵: "股",
	乕: "虎",
	皷: "鼓",
	鼔: "鼓",
	吴: "呉",
	吳: "呉",
	娛: "娯",
	忢: "悟",
	矦: "侯",
	灮: "光",
	炗: "光",
	效: "効",
	衖: "巷",
	廣: "広",
	恆: "恒",
	抅: "拘",
	晄: "晃",
	澔: "浩",
	稾: "稿",
	藳: "稿",
	稁: "稿",
	綋: "紘",
	畊: "耕",
	鑛: "鉱",
	礦: "砿",
	髙: "高",
	刧: "劫",
	刦: "劫",
	刼: "劫",
	號: "号",
	軣: "轟",
	國: "国",
	圀: "国",
	囶: "国",
	囻: "国",
	糓: "穀",
	榖: "穀",
	黑: "黒",
	昬: "昏",
	嵳: "嵯",
	鏁: "鎖",
	鎻: "鎖",
	歲: "歳",
	嵗: "歳",
	濟: "済",
	灾: "災",
	烖: "災",
	碎: "砕",
	齋: "斎",
	劑: "剤",
	戝: "財",
	冱: "冴",
	沍: "冴",
	嵜: "崎",
	﨑: "崎",
	碕: "埼",
	栅: "柵",
	敇: "策",
	櫻: "桜",
	册: "冊",
	煞: "殺",
	雜: "雑",
	襍: "雑",
	皋: "皐",
	臯: "皐",
	曬: "晒",
	弎: "三",
	仐: "傘",
	伞: "傘",
	參: "参",
	叄: "参",
	叅: "参",
	慘: "惨",
	棧: "桟",
	蠶: "蚕",
	讚: "讃",
	贊: "賛",
	湌: "餐",
	殘: "残",
	亖: "四",
	姊: "姉",
	絲: "糸",
	帋: "紙",
	眎: "視",
	眂: "視",
	眡: "視",
	齒: "歯",
	亊: "事",
	叓: "事",
	兒: "児",
	时: "時",
	峕: "時",
	尓: "爾",
	尔: "爾",
	壐: "璽",
	玺: "璽",
	辭: "辞",
	濕: "湿",
	溼: "湿",
	貭: "質",
	實: "実",
	筱: "篠",
	蘂: "蕊",
	蕋: "蕊",
	蘃: "蕊",
	舍: "舎",
	冩: "写",
	寫: "写",
	煑: "煮",
	虵: "蛇",
	釋: "釈",
	垨: "守",
	咒: "呪",
	壽: "寿",
	收: "収",
	秌: "秋",
	穐: "秋",
	龝: "秋",
	繡: "繍",
	狊: "臭",
	乑: "衆",
	眾: "衆",
	讎: "讐",
	蹵: "蹴",
	酧: "酬",
	從: "従",
	澁: "渋",
	澀: "渋",
	獸: "獣",
	縱: "縦",
	肅: "粛",
	湻: "淳",
	凖: "準",
	醕: "醇",
	處: "処",
	敍: "叙",
	敘: "叙",
	甞: "嘗",
	奬: "奨",
	獎: "奨",
	將: "将",
	厰: "廠",
	曻: "昇",
	枩: "松",
	柗: "松",
	梥: "松",
	枀: "松",
	涉: "渉",
	燒: "焼",
	瞾: "照",
	稱: "称",
	穪: "称",
	蔣: "蒋",
	證: "証",
	醬: "醤",
	丄: "上",
	乘: "乗",
	宂: "冗",
	剩: "剰",
	塲: "場",
	壤: "壌",
	孃: "嬢",
	條: "条",
	淨: "浄",
	狀: "状",
	疊: "畳",
	疉: "畳",
	疂: "畳",
	叠: "畳",
	穰: "穣",
	讓: "譲",
	釀: "醸",
	囑: "嘱",
	餝: "飾",
	餙: "飾",
	軄: "職",
	觸: "触",
	脣: "唇",
	訷: "伸",
	寢: "寝",
	宷: "審",
	愼: "慎",
	晉: "晋",
	眞: "真",
	刄: "刃",
	盡: "尽",
	靫: "靭",
	靱: "靭",
	韌: "靭",
	醋: "酢",
	圖: "図",
	啚: "図",
	圗: "図",
	廚: "厨",
	橱: "厨",
	埀: "垂",
	粹: "粋",
	氺: "水",
	翆: "翠",
	醉: "酔",
	隨: "随",
	膸: "髄",
	髓: "髄",
	數: "数",
	樞: "枢",
	鶵: "雛",
	椙: "杉",
	杦: "杉",
	澂: "澄",
	丗: "世",
	卋: "世",
	瀨: "瀬",
	畆: "畝",
	畒: "畝",
	昰: "是",
	淒: "凄",
	势: "勢",
	愸: "整",
	暒: "晴",
	栖: "棲",
	捿: "棲",
	淸: "清",
	聲: "声",
	靑: "青",
	靜: "静",
	齊: "斉",
	亝: "斉",
	斊: "斉",
	稅: "税",
	脃: "脆",
	攝: "摂",
	說: "説",
	竊: "窃",
	絕: "絶",
	蟬: "蝉",
	專: "専",
	戰: "戦",
	淺: "浅",
	潛: "潜",
	濳: "潜",
	綫: "線",
	纖: "繊",
	纎: "繊",
	舩: "船",
	賤: "賎",
	踐: "践",
	錢: "銭",
	歬: "前",
	譱: "善",
	禪: "禅",
	饍: "膳",
	曾: "曽",
	踈: "疎",
	蘓: "蘇",
	溯: "遡",
	鼡: "鼠",
	雙: "双",
	壯: "壮",
	帀: "匝",
	搜: "捜",
	插: "挿",
	揷: "挿",
	搔: "掻",
	曺: "曹",
	巢: "巣",
	爭: "争",
	瘦: "痩",
	膄: "痩",
	窗: "窓",
	牕: "窓",
	牎: "窓",
	窻: "窓",
	總: "総",
	緫: "総",
	縂: "総",
	聰: "聡",
	聦: "聡",
	聪: "聡",
	莊: "荘",
	庄: "荘",
	庒: "荘",
	塟: "葬",
	裝: "装",
	赱: "走",
	騷: "騒",
	增: "増",
	臟: "臓",
	藏: "蔵",
	卽: "即",
	屬: "属",
	續: "続",
	卆: "卒",
	夛: "多",
	墮: "堕",
	柁: "舵",
	橢: "楕",
	陁: "陀",
	馱: "駄",
	驒: "騨",
	躰: "体",
	軆: "体",
	體: "体",
	骵: "体",
	垖: "堆",
	對: "対",
	帶: "帯",
	滯: "滞",
	帒: "袋",
	臺: "台",
	瀧: "滝",
	桌: "卓",
	擇: "択",
	澤: "沢",
	鈬: "鐸",
	逹: "達",
	豎: "竪",
	貍: "狸",
	單: "単",
	单: "単",
	擔: "担",
	簞: "箪",
	躭: "耽",
	膽: "胆",
	煅: "鍛",
	團: "団",
	彈: "弾",
	斷: "断",
	耻: "恥",
	癡: "痴",
	穉: "稚",
	稺: "稚",
	遲: "遅",
	稸: "蓄",
	晝: "昼",
	蟲: "虫",
	鑄: "鋳",
	潴: "瀦",
	豬: "猪",
	賬: "帳",
	廳: "庁",
	廰: "庁",
	徵: "徴",
	甼: "町",
	聽: "聴",
	膓: "腸",
	镸: "長",
	敕: "勅",
	勑: "勅",
	欶: "勅",
	沉: "沈",
	珎: "珍",
	鎭: "鎮",
	摑: "掴",
	壺: "壷",
	寉: "鶴",
	靎: "鶴",
	靍: "鶴",
	靏: "鶴",
	埞: "堤",
	椗: "碇",
	蹏: "蹄",
	遞: "逓",
	坭: "泥",
	喆: "哲",
	嚞: "哲",
	埑: "哲",
	悊: "哲",
	銕: "鉄",
	鐵: "鉄",
	鐡: "鉄",
	塡: "填",
	纒: "纏",
	轉: "転",
	顚: "顛",
	點: "点",
	傳: "伝",
	兔: "兎",
	莵: "兎",
	礪: "砺",
	伮: "努",
	圡: "土",
	黨: "党",
	嶌: "島",
	嶋: "島",
	隝: "島",
	檮: "梼",
	盜: "盗",
	濤: "涛",
	燈: "灯",
	當: "当",
	禱: "祷",
	綂: "統",
	迯: "逃",
	鬪: "闘",
	仂: "働",
	仝: "同",
	衟: "道",
	德: "徳",
	悳: "徳",
	瀆: "涜",
	獨: "独",
	讀: "読",
	杤: "栃",
	宊: "突",
	屆: "届",
	丣: "酉",
	吞: "呑",
	柰: "奈",
	內: "内",
	繩: "縄",
	枏: "楠",
	柟: "楠",
	弍: "二",
	貳: "弐",
	貮: "弐",
	邇: "迩",
	韭: "韮",
	姙: "妊",
	禰: "祢",
	迺: "廼",
	壄: "野",
	墅: "野",
	埜: "野",
	囊: "嚢",
	惱: "悩",
	腦: "脳",
	霸: "覇",
	駡: "罵",
	廢: "廃",
	拜: "拝",
	贁: "敗",
	盃: "杯",
	桮: "杯",
	軰: "輩",
	楳: "梅",
	賣: "売",
	蠅: "蝿",
	蝇: "蝿",
	矤: "矧",
	剝: "剥",
	廹: "迫",
	麥: "麦",
	凾: "函",
	肈: "肇",
	枦: "櫨",
	缽: "鉢",
	潑: "溌",
	發: "発",
	醱: "醗",
	髮: "髪",
	罸: "罰",
	拔: "抜",
	栰: "筏",
	飰: "飯",
	蠻: "蛮",
	祕: "秘",
	僃: "備",
	俻: "備",
	偹: "備",
	毗: "毘",
	薭: "稗",
	頾: "髭",
	彥: "彦",
	弻: "弼",
	笔: "筆",
	檜: "桧",
	姬: "姫",
	冰: "氷",
	庿: "廟",
	庙: "廟",
	斌: "彬",
	份: "彬",
	濱: "浜",
	濵: "浜",
	賔: "賓",
	甁: "瓶",
	冨: "富",
	旉: "敷",
	暜: "普",
	肤: "膚",
	諩: "譜",
	儛: "舞",
	郶: "部",
	凬: "風",
	凮: "風",
	凨: "風",
	渕: "淵",
	渊: "淵",
	拂: "払",
	佛: "仏",
	倂: "併",
	幤: "幣",
	竝: "並",
	閇: "閉",
	篦: "箆",
	變: "変",
	邊: "辺",
	邉: "辺",
	辨: "弁",
	辧: "弁",
	瓣: "弁",
	辯: "弁",
	舖: "舗",
	鋪: "舗",
	步: "歩",
	穗: "穂",
	寶: "宝",
	寳: "宝",
	珤: "宝",
	寚: "宝",
	峯: "峰",
	灋: "法",
	萠: "萌",
	蠭: "蜂",
	襃: "褒",
	豐: "豊",
	冐: "冒",
	皃: "貌",
	頰: "頬",
	沒: "没",
	縨: "幌",
	夲: "本",
	飜: "翻",
	凢: "凡",
	蔴: "麻",
	每: "毎",
	槇: "槙",
	枡: "桝",
	儘: "侭",
	萬: "万",
	滿: "満",
	澷: "漫",
	熳: "漫",
	簑: "蓑",
	簔: "蓑",
	脉: "脈",
	衇: "脈",
	玅: "妙",
	竗: "妙",
	梦: "夢",
	夣: "夢",
	无: "無",
	壻: "婿",
	聟: "婿",
	朙: "明",
	靣: "面",
	麪: "麺",
	麫: "麺",
	麵: "麺",
	糆: "麺",
	勐: "猛",
	默: "黙",
	嘿: "黙",
	餠: "餅",
	彌: "弥",
	笶: "矢",
	藥: "薬",
	譯: "訳",
	栁: "柳",
	桺: "柳",
	籔: "薮",
	藪: "薮",
	瘉: "癒",
	勈: "勇",
	豫: "予",
	餘: "余",
	與: "与",
	譽: "誉",
	搖: "揺",
	樣: "様",
	窰: "窯",
	燿: "耀",
	謠: "謡",
	踴: "踊",
	阳: "陽",
	阦: "陽",
	羪: "養",
	躶: "裸",
	來: "来",
	萊: "莱",
	賴: "頼",
	靁: "雷",
	亂: "乱",
	覽: "覧",
	杍: "李",
	棃: "梨",
	裡: "裏",
	畧: "略",
	澑: "溜",
	畄: "留",
	畱: "留",
	龍: "竜",
	兩: "両",
	凉: "涼",
	獵: "猟",
	暸: "瞭",
	粮: "糧",
	綠: "緑",
	鄰: "隣",
	璢: "瑠",
	壘: "塁",
	泪: "涙",
	类: "類",
	勵: "励",
	禮: "礼",
	隸: "隷",
	靈: "霊",
	灵: "霊",
	霛: "霊",
	齡: "齢",
	曆: "暦",
	歷: "歴",
	戀: "恋",
	聨: "聯",
	爐: "炉",
	勞: "労",
	劳: "労",
	娄: "婁",
	朖: "朗",
	樓: "楼",
	籠: "篭",
	蠟: "蝋",
	祿: "禄",
	禒: "禄",
	錄: "録",
	咊: "和",
	亙: "亘",
	灣: "湾",
	埦: "碗",
	仭: "仞",
	伫: "佇",
	爼: "俎",
	伜: "倅",
	俩: "倆",
	僲: "僊",
	僣: "僭",
	俦: "儔",
	冄: "冉",
	伷: "胄",
	寃: "冤",
	寇: "冦",
	宼: "冦",
	羃: "冪",
	洌: "冽",
	涸: "凅",
	凜: "凛",
	刋: "刊",
	尅: "剋",
	箚: "剳",
	劄: "剳",
	匇: "匆",
	滙: "匯",
	奩: "匳",
	匲: "匳",
	奁: "匳",
	巵: "卮",
	庬: "厖",
	廁: "厠",
	廈: "厦",
	廝: "厮",
	爕: "燮",
	呍: "吽",
	咜: "咤",
	吒: "咤",
	咯: "喀",
	齅: "嗅",
	呕: "嘔",
	嘨: "嘯",
	譟: "噪",
	嚏: "嚔",
	齧: "囓",
	阯: "址",
	埓: "埒",
	壍: "塹",
	罎: "壜",
	壠: "壟",
	夹: "夾",
	弉: "奘",
	侫: "佞",
	姸: "妍",
	嬝: "嫋",
	姮: "嫦",
	嫰: "嫩",
	嫻: "嫺",
	嫐: "嬲",
	尟: "尠",
	尣: "尢",
	屛: "屏",
	崐: "崑",
	崘: "崙",
	篏: "嵌",
	嶤: "嶢",
	峦: "巒",
	幚: "幇",
	幫: "幇",
	迪: "廸",
	彜: "彝",
	弯: "彎",
	彐: "彑",
	蔧: "彗",
	髴: "彿",
	佪: "徊",
	佷: "很",
	狥: "徇",
	傜: "徭",
	忩: "怱",
	悤: "怱",
	猂: "悍",
	恡: "悋",
	忰: "悴",
	愠: "慍",
	慤: "愨",
	媿: "愧",
	慚: "慙",
	憗: "憖",
	慭: "憖",
	嫶: "憔",
	惮: "憚",
	慿: "憑",
	懑: "懣",
	懴: "懺",
	戞: "戛",
	扨: "扠",
	揑: "捏",
	抬: "擡",
	擥: "攬",
	攢: "攅",
	挛: "攣",
	爴: "攫",
	酙: "斟",
	斾: "旆",
	旙: "旛",
	晣: "晢",
	昿: "曠",
	朵: "朶",
	杰: "傑",
	檔: "档",
	槶: "椢",
	椶: "棕",
	檝: "楫",
	槀: "槁",
	橊: "榴",
	櫳: "槞",
	枞: "樅",
	櫁: "樒",
	蘗: "檗",
	檪: "櫟",
	櫸: "欅",
	欞: "櫺",
	棂: "櫺",
	栾: "欒",
	欤: "歟",
	殁: "歿",
	殱: "殲",
	毮: "毟",
	毡: "氈",
	氊: "氈",
	汴: "汳",
	冺: "泯",
	汹: "洶",
	滚: "滾",
	渗: "滲",
	涁: "滲",
	澘: "潸",
	澚: "澳",
	烱: "炯",
	熈: "煕",
	熙: "煕",
	凞: "煕",
	燻: "熏",
	暿: "熹",
	熺: "熹",
	烬: "燼",
	丬: "爿",
	犁: "犂",
	豺: "犲",
	貉: "狢",
	倐: "倏",
	貎: "猊",
	貒: "猯",
	狌: "猩",
	貘: "獏",
	瑇: "玳",
	瑯: "琅",
	碯: "瑙",
	瑤: "瑶",
	珱: "瓔",
	瓯: "甌",
	畬: "畭",
	畲: "畭",
	壃: "疆",
	畺: "疆",
	疅: "疆",
	畴: "疇",
	肬: "疣",
	癅: "瘤",
	瘘: "瘻",
	癎: "癇",
	晈: "皎",
	晥: "皖",
	皹: "皸",
	蘯: "盪",
	眦: "眥",
	睠: "眷",
	瞪: "瞠",
	矙: "瞰",
	瞩: "矚",
	禀: "稟",
	筺: "筐",
	筓: "笄",
	笋: "筍",
	箰: "筍",
	筝: "箏",
	筹: "籌",
	籘: "籐",
	籖: "籤",
	稉: "粳",
	秔: "粳",
	糭: "粽",
	綗: "絅",
	絖: "絋",
	纊: "絋",
	靽: "絆",
	縧: "絛",
	繈: "繦",
	綳: "繃",
	緕: "纃",
	纘: "纉",
	甇: "罌",
	罒: "网",
	罓: "网",
	羇: "羈",
	覊: "羈",
	羮: "羹",
	耊: "耋",
	肧: "胚",
	倎: "腆",
	腗: "脾",
	腁: "胼",
	膐: "膂",
	腟: "膣",
	脍: "膾",
	臈: "臘",
	舮: "艫",
	囏: "艱",
	苢: "苡",
	莓: "苺",
	荔: "茘",
	蒞: "莅",
	荚: "莢",
	蕚: "萼",
	萕: "薺",
	蔾: "藜",
	藴: "蘊",
	薀: "蘊",
	蕰: "蘊",
	蝨: "虱",
	蜹: "蚋",
	蟵: "蛛",
	虽: "雖",
	蟆: "蟇",
	蝼: "螻",
	蟒: "蠎",
	蠧: "蠹",
	螙: "蠹",
	衂: "衄",
	衮: "袞",
	袵: "衽",
	裠: "裙",
	裵: "裴",
	緥: "褓",
	褝: "襌",
	裆: "襠",
	擷: "襭",
	覀: "襾",
	覔: "覓",
	哬: "訶",
	諡: "謚",
	讁: "謫",
	譛: "譖",
	岈: "谺",
	鼦: "貂",
	豼: "貔",
	賷: "齎",
	賫: "齎",
	賍: "贓",
	贜: "贓",
	蹷: "蹶",
	踌: "躊",
	躪: "躙",
	躳: "躬",
	輒: "輙",
	輺: "輜",
	輛: "輌",
	輀: "轜",
	辢: "辣",
	逈: "迥",
	逎: "遒",
	迈: "邁",
	舋: "釁",
	衅: "釁",
	鉇: "鉈",
	衘: "銜",
	焇: "銷",
	鍿: "錙",
	鏽: "鏥",
	鈩: "鑪",
	鑚: "鑽",
	鬧: "閙",
	剦: "閹",
	濶: "闊",
	閴: "闃",
	陿: "陜",
	徏: "陟",
	隯: "陦",
	騭: "隲",
	隽: "雋",
	鞱: "韜",
	韲: "齏",
	韵: "韻",
	匀: "韻",
	頥: "頤",
	頹: "頽",
	飃: "飄",
	颷: "飆",
	飈: "飆",
	飇: "飆",
	飊: "飆",
	騈: "駢",
	驘: "騾",
	憍: "驕",
	馿: "驢",
	髥: "髯",
	鬂: "鬢",
	髩: "鬢",
	鬓: "鬢",
	鰛: "鰮",
	魳: "鰤",
	魲: "鱸",
	鳬: "鳧",
	鵶: "鴉",
	鵄: "鴟",
	鵞: "鵝",
	鶫: "鶇",
	鵾: "鶤",
	鷏: "鷆",
	麸: "麩",
	麬: "麩",
	鱉: "鼈",
	齓: "齔",
	腭: "齶",
	伇: "役",
	俞: "兪",
	傯: "偬",
	僈: "慢",
	兊: "兌",
	凴: "凭",
	别: "別",
	刱: "剏",
	剙: "剏",
	剎: "刹",
	剹: "戮",
	劐: "劃",
	劲: "勁",
	卄: "廿",
	卛: "率",
	卝: "艸",
	厀: "膝",
	叏: "夬",
	叞: "尉",
	叵: "難",
	吿: "告",
	哌: "呱",
	哧: "嚇",
	唈: "邑",
	姧: "奸",
	姦: "奸",
	寜: "寧",
	尙: "尚",
	尫: "尩",
	屢: "屡",
	帍: "寅",
	刁: "寅",
	幷: "并",
	弈: "奕",
	扵: "於",
	挍: "校",
	搥: "槌",
	擈: "撲",
	擊: "撃",
	晚: "晩",
	枓: "斗",
	樻: "櫃",
	毁: "毀",
	淂: "得",
	潄: "嗽",
	烣: "恢",
	焏: "亟",
	熢: "烽",
	犱: "執",
	瓫: "盆",
	產: "産",
	礻: "示",
	秊: "年",
	窂: "牢",
	笀: "芒",
	笇: "算",
	筭: "算",
	笌: "芽",
	笗: "苳",
	緖: "緒",
	羕: "承",
	羡: "羨",
	脫: "脱",
	莭: "節",
	蹔: "暫",
	鳯: "鳳",
	麴: "麹",
	麽: "麼",
	关: "癸",
	蕳: "簡",
	閠: "閏",
	壬: "閏",
	薗: "園",
	苑: "園",
	謌: "歌",
	哥: "歌",
	籏: "旗",
	簱: "旗",
	竸: "競",
	竞: "競",
	堯: "尭",
	蹟: "跡",
	迹: "跡",
	涌: "湧",
	遙: "遥",
	縲: "累",
	牆: "墻",
	墙: "墻",
	郞: "郎",
	悅: "悦",
	懼: "惧",
	蒭: "芻",
	韈: "襪",
	Á: "A",
	À: "A",
	Â: "A",
	Ä: "A",
	Ã: "A",
	Å: "A",
	Æ: "A",
	Ā: "A",
	á: "a",
	à: "a",
	â: "a",
	ä: "a",
	ã: "a",
	å: "a",
	æ: "a",
	ā: "a",
	É: "E",
	È: "E",
	Ê: "E",
	Ë: "E",
	Ē: "E",
	é: "e",
	è: "e",
	ê: "e",
	ë: "e",
	ē: "e",
	Í: "I",
	Ì: "I",
	Î: "I",
	Ï: "I",
	Ī: "I",
	í: "i",
	ì: "i",
	î: "i",
	ï: "i",
	ī: "i",
	Ó: "O",
	Ò: "O",
	Ô: "O",
	Ö: "O",
	Õ: "O",
	Œ: "O",
	Ø: "O",
	Ō: "O",
	ó: "o",
	ò: "o",
	ô: "o",
	ö: "o",
	õ: "o",
	œ: "o",
	ø: "o",
	ō: "o",
	Ú: "U",
	Ù: "U",
	Û: "U",
	Ü: "U",
	Ū: "U",
	ú: "u",
	ù: "u",
	û: "u",
	ü: "u",
	ū: "u",
	Ý: "Y",
	Ÿ: "Y",
	ý: "y",
	ÿ: "y",
	Ç: "C",
	ç: "c",
	Ñ: "N",
	ñ: "n",
	ß: "s",
};