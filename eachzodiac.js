/* mouse over box */
let wholeWrap= document.getElementById("wholeWrap");
let zodiac = document.getElementsByClassName("headBar")[0];

let signBox = document.getElementById("signBox");
zodiac.addEventListener("mouseover",()=>{
     signBox.style.display="block";
   
})
zodiac.addEventListener("mouseout",()=>{
    signBox.style.display="none";
});
signBox.addEventListener("mouseover",()=>{
    signBox.style.display="block";
})
signBox.addEventListener("mouseout",()=>{
    signBox.style.display="none";
})
                   
                   
                
                //get new sign data  and get new page
                window.onload = function() {
                  var signcards = document.querySelectorAll('#signcard');
          
                  signcards.forEach(function(signcard) {
                      signcard.addEventListener('click', function() {
                          var signName = this.querySelector('span').innerText;
                          sessionStorage.setItem('signName', signName);
                          window.location.href = 'eachzodiac.html'; // Redirect back to the current page
                      });
                  });
              };

let signName =sessionStorage.getItem("signName");
  
const zodiacSigns = [
    {
      img:"https://www.zodiacsign.com/images/aries.jpg",  
      name: 'Aries',
      element: 'မီး',
      color: 'အနီရောင်',
      quality: 'Cardinal',
      ruler: 'အင်္ဂါဂြိုဟ်',
      greatestCompatibility: ['သိဟ်ရာသီဖွား', 'ဓနု ရာသီဖွား'],
      luckyNumbers: [1, 9, 10],
      dates: 'March 21 - April 19',
      personalityTraits: {
        strengths: ['ရဲရင့်ခြင်း', 'ယုံကြည်မှု', 'စိတ်အားထက်သန်မှု'],
        weaknesses: ['စိတ်မရှည်ခြင်း', 'စိတ်တိုခြင်း'],
        likes: ['ပထမဖြစ်ခြင်း', 'စိန်ခေါ်မှုများ', 'အနိုင်ရခြင်း'],
        dislikes: ['စောင့်ဆိုင်းခြင်း', 'ကျရှုံးမှုကို ဝန်ခံခြင်း', 'မလှုပ်ရှားခြင်း']
      },
      paragraph1:"ရာသီခွင်တွင် ပထမဆုံးသော လက္ခဏာအနေဖြင့် Aries ၏ရောက်ရှိမှုသည် အမြဲတမ်း တက်ကြွပြီး လှိင်းထနေသည့်အရာတစ်ခု၏ အစဖြစ်သည်။ ၎င်းတိုသည် သွက်လက်သောအတွေ့အကြုံများ၊ အရှိန်အဟုန်နှင့် ပြိုင်ဆိုင်မှုများကို စဉ်ဆက်မပြတ်ရှာဖွေနေပြီး အလုပ်မှသည် လူမှုရေးဆုံပွဲများအထိ အရာအားလုံးတွင် ပထမဖြစ်ရန် အမြဲကြိုးစားနေပါသည်။ အင်္ဂါဂြိုလ်ကို အုပ်စိုးသောဂြိုဟ်နှင့်အတူ မီးဒြပ်စင် (Leo နှင့် Sagittarius ကဲ့သို) Aries သည် အတက်ကြွဆုံး ရာသီခွင်များထဲမှ တစ်ခုဖြစ်သည်။ တခါတရံမှာ အရာတွေကို မတွေးခင်မှာ လုပ်ဆောင်မှုကိုပြုလုပ်ဖိုက သူတိုရဲ့ သဘောသဘာဝမှာ ရှိပါတယ်။",
      paragraph2:"ထိုကဲ့သို့ ဂုဏ်သိက္ခာမြင့်မားသော နေဂြိုလ်သည် အလုပ်များစွာကိုစီမံသောနေရာတွင်အလွန်တော်ပြီး အလုပ်များစွာကို တစ်ပြိုင်နက် မပြီးမြောက်နိုင်သော Aries နှင့် တွေ့ဆုံရန် ရှားပါးလှသည်။ သို့သော် စိန်ခေါ်မှုများ ဖြစ်ပေါ်လာ‌ေသာအချိန်တွင် စိတ်မရှည်ခြင်း၊ ရန်လိုခြင်းနှင့် အခြားသူများကို ၎င်းတို့၏ဒေါသကို ထုတ်လွှတ်သည် ။  သန်မာသောကိုယ်ရည်ကိုယ်သွေးများသည် ဤ sign အောက်တွင် မွေးဖွားလေ့ရှိသည် ၎င်းတို့၏ပန်းတိုင်များအတွက် တိုက်ပွဲဝင်ရန်၊ အတူတကွစည်းလုံးမှုနှင့် အဖွဲ့လိုက်လုပ်ဆောင်မှုကို နှစ်သတ်သည်။ "
    },
    {   
        img:"https://www.zodiacsign.com/images/taurus.jpg",
      name: 'Taurus',
      element: 'Earth',
      color: 'အဝါရောင်',
      quality: 'Fixed',
      ruler: 'Venus',
      greatestCompatibility: ['ကန်ရာသီဖွား', 'မကရရာသီဖွား'],
      luckyNumbers: [2, 6, 9],
      dates: 'April 20 - May 20',
      personalityTraits: {
        strengths: ['ယုံကြည်စိတ်ချရခြင်း', 'စိတ်ရှည်ခြင်း', 'လက်တွေ့ခြင်း'],
        weaknesses: ['ခေါင်းမာခြင်း', 'အပြုသဘောဆောင်ခြင်း', 'အလျှော့မပေးခြင်း'],
        likes: ['တည်ငြိမ်မှု', 'နှစ်သိမ့်မှု', 'သဘာဝ'],
        dislikes: ['ပြောင်းလဲမှု', 'အနှောင့်အယှက်', 'မလုံခြုံမှု']
      },
      paragraph1:"",
      paragraph2:"Taurus သည် Virgo နှင့် Capricorn ကဲ့သို့ ကမ္ဘာမြေ၏ သင်္ကေတဖြစ်သည်။ Taurus တွင် အခြေခံ၊ လက်တွေ့ကျပြီး လက်တွေ့ကျသော အမြင်ရှိသည်။ သူတို့မှာ ငွေရှာနိုင်တဲ့ အရည်အချင်းတွေရှိပြီး ပြီးကြီးမားသောproject များကို အဆုံးထိပြီးစီးအောင်လုပ်နိုင်စွမ်းရှိပါသည်။ ၎င်းတို့၏ ဆုံးဖြတ်ချက်အနှင့် ကတိကဝတ်များ သည် တစ်ခါတစ်ရံ ခေါင်းမာသည် ဟု မှားယွင်းစွာအထင်ခံရတက်သော်လည်း ၎င်းတို့သည် ရိုးရိုးရှင်းရှင်း ခိုင်မာသော တာဝန်သိစိတ်ရှိသည်။ Taurus သည် သူတို့ချစ်သောသူများအတွက် အမြဲရှိနေသောကြောင့် ဝန်ထမ်းကောင်းများ၊ ရေရှည်သူငယ်ချင်းများနှင့် လုပ်ဖော်ကိုင်ဖက်များကို ဖန်တီးပေးသည်။ သို့ရာတွင်၊ ၎င်းတို့၏ကမ္ဘာမြေသဘာဝသည် တစ်ခါတစ်ရံတွင် ၎င်းတို့အား အကာအကွယ်လွန်ကဲစွာ၊ ရှေးရိုးဆန်သည်ဟုအထင်ခံရစေနိုင်သည်၊၊ ၎င်းတို့၏ကမ္ဘာနှင့်ပတ်သက်သောအမြင်များသည် ငွေကြေးတည်ငြိမ်မှုအတွက် ၎င်းတို့၏ဆန္ဒကို လွှမ်းမိုးနေသောကြောင့်ဖြစ်သည်။"
    },
    {
        img:"https://www.zodiacsign.com/images/gemini.jpg",
      name: 'Gemini',
      element: 'Air',
      color: 'အဝါရောင်',
      quality: 'Mutable',
      ruler: 'Mercury',
      greatestCompatibility: ['တူရာသီဖွား', 'ကုံရာသီဖွား'],
      luckyNumbers: [5, 7, 14],
      dates: 'May 21 - June 20',
      personalityTraits: {
        strengths: ['စွယ်စုံရ', 'လိုက်လျောညီထွေဖြစ်', 'စပ်စု'],
        weaknesses: ['ဆုံးဖြတ်ချက်မခိုင်မာ', 'အပေါ်ယံသဘောထား', 'ကြောက်ရွံလွယ်'],
        likes: ['သင်ယူခြင်း', 'လူမှုရေးဆက်ဆံခြင်း', 'အတွေ့အကြုံသစ်များ'],
        dislikes: ['လုပ်ရိုးလုပ်စဉ်', 'တစ်ယောက်တည်းနေရတာ', '']
      },
      paragraph1:"Gemini သည် မတူကွဲပြားသော ကိုယ်ရည်ကိုယ်သွေး နှစ်ခုကို ကိုယ်စားပြုသည့် ရာသီခွင်တစ်ခုဖြစ်ပြီး ၎င်းတိုကို သွက်လက်မြန်ဆန်စွာ ထုတ်ဖော်ပြောဆိုတက်သည်။ ၎င်းတိုသည် ပေါင်းသင်းဆက်ဆံရေးကောင်းမွန်ပြီး  ပျော်ရွှင်စရာအတွက် အမြဲအဆင်သင့်ဖြစ်နေသော်လည်း တစ်ခါတစ်ရံ လေးနက်ပြီး၊ တွေးခေါ်မှု များလာတက်ပါသည်။ ကမ္ဘာကြီးအကြောင်း စူးစမ်းချင်စိတ်က အကန့်အသတ်မရှိသလို သူတိုမြင်ချင်သမျှကို တွေ့ကြုံခံစားဖို အချိန်မလောက်ဘူးလို ခံစားရလေ့ရှိပါတယ်။",
      paragraph2:"  "
    
    },
    {
        img:"https://www.zodiacsign.com/images/cancer.jpg",
      name: 'Cancer',
      element: 'Water',
      color: 'ငွေရောင်',
      quality: 'Cardinal',
      ruler: 'Moon',
      greatestCompatibility: ['ဗြိစ္ဆာရာသီဖွား', 'မိန်ရာသီဖွား'],
      luckyNumbers: [2, 3, 11],
      dates: 'June 21 - July 22',
      personalityTraits: {
        strengths: ['ခံစားချက်လွယ်', 'အလိုလိုသိမြင့်မား', 'ပြုစုပျိုးထောင်နိုင်စွမ်းရှိ'],
        weaknesses: ['စိတ်ဓာတ်ကျခြင်း', 'စိတ်ခံစားချက်လွန်ကဲခြင်း', 'အဆိုးမြင်စိတ်'],
        likes: ['အိမ်', 'မိသားစု', 'ရိုးရာဓလေ့'],
        dislikes: ['ဝေဖန်မှု', 'သူစိမ်း', 'စိတ်အားငယ်ခြင်း']
      },
      paragraph1:"ကရကဋ်ဆိုတာ နက်နဲသိမ်မွေ့ပြီး စိတ်ကူးယဉ်ဆန်တဲ့ ရာသီခွင်တစ်ခုဖြစ်ပြီး သိဖို့အခက်ဆုံး လက္ခဏာတွေထဲက တစ်ခုဖြစ်ပါတယ်။ ၎င်းတို့သည် အလွန်စိတ်ခံစားမှုရှိပြီး ထိလွယ်ရှလွယ်ရှိပြီး မိသားစုနှင့် အိမ်နှင့်ပတ်သက်သည့် ကိစ္စရပ်များကို ဦးစားပေးသည်။ ကရကဋ်နေ (Sun in Cancer) တွင် မွေးဖွားသူများသည် အခြားသူများ၏ နာကျင်မှုနှင့် ဝေဒနာအပေါ် အလွန်သစ္စာရှိပြီး စာနာတတ်ကြသည်။",
      paragraph2:""
    },
    {
       img:"https://www.zodiacsign.com/images/leo.jpg", 
      name: 'Leo',
      element: 'Fire',
      color: 'ရွှေရောင်',
      quality: 'Fixed',
      ruler: 'Sun',
      greatestCompatibility: ['မိဿ ရာသီဖွာ', 'ဓနု ရာသီဖွား'],
      luckyNumbers: [1, 4, 10],
      dates: 'July 23 - August 22',
      personalityTraits: {
        strengths: ['ကိုယ့်ကိုယ်ကိုယုံကြည်မှုရှိခြင်း', 'ရက်ရောခြင်း', 'သစ္စာရှိခြင်း'],
        weaknesses: ['မာနကြီးခြင်း', 'ခေါင်းမာခြင်း', 'လူအများစိတ်၀င်စားမှုလိုခြင်'],
        likes: ['အာရုံစိုက်ခံရမှု', 'ချီကျူးခြင်း', 'နှစ်သတ်ခံရခြင်း'],
        dislikes: ['လျှစ်လျူရှုခံရခြင်း', 'ဝေဖန်ခံရမှု', 'အသုံးချခံရမှု']
      },
      paragraph1:"Leo နိမိတ်အောက်တွင် မွေးဖွားလာသူများသည် ၎င်းတို၏ သဘာဝအတိုင်း ခေါင်းဆောင်မှုစွမ်းရည်ကြောင့် လူသိများသည်။ ၎င်းတိုတွင် တီထွင်ဖန်တီးနိုင်မှု၊ ကိုယ့်ကိုယ်ကိုယ် ယုံကြည်မှု၊ စိုးမိုးမှုနှင့် ခုခံရန်ခက်ခဲသော ခိုင်မာသောတည်ရှိမှုကဲ့သိုသော အရည်အသွေးများ ပိုင်ဆိုင်ထားသည်။ Leos သည် မိမိတို၏ဘဝ၏ ကဏ္ဍပေါင်းစုံတွင် မိမိတို၏စိတ်ဆန္ဒအတိုင်း ချမှတ်ထားသော မည်သည့်အရာကိုမဆို အောင်မြင်နိုင်သည် ။ Leo ၏ ခွန်အားသည် ၎င်းတို၏ 'တောတွင်းဘုရင်' အဆင့်တွင် တည်ရှိသည်။ သူတိုသည် အများအားဖြင့် ရက်ရောပြီး သစ္စာရှိကြသောကြောင့် သူငယ်ချင်းများစွာရှိနိုင်ကြသည်။ သူတိုရဲ့ ကိုယ့်ကိုယ်ကို ယုံကြည်မှု နဲ့ ဆွဲဆောင်မှု က လူတွေကို မတူညီတဲ့ အုပ်စုတွေကို စုစည်းစေပြီး ဘုံပန်းတိုင်တစ်ခုဆီကို ဦးဆောင်နိုင်စေတယ်။ ထိုအပြင် Leos သည် အခြားသူများနှင့် ပူးပေါင်းလုပ်ဆောင်ရန် ပိုမိုလွယ်ကူစေသည့် နှင့်ညီညွတ်သော ဟာသဉာဏ်ရှိသည်။",
      paragraph2:""
    },
    {
      img:"https://www.zodiacsign.com/images/virgo.jpg",  
      name: 'Virgo',
      element: 'Earth',
      color: 'အစိမ်းရောင်',
      quality: 'Mutable',
      ruler: 'Mercury',
      greatestCompatibility: ['ပြိဿရာသီဖွား', 'မကရရာသီဖွား'],
      luckyNumbers: [5, 7, 15],
      dates: 'August 23 - September 22',
      personalityTraits: {
        strengths: ['ခွဲခြမ်းစိတ်ဖြာခြင်း', 'လက်တွေ့ဆန်သည်', 'အသေးစိတ်ဆန်သည်'],
        weaknesses: ['လွန်ကဲစွာဝေဖန်ခြင်း', '', 'အလွန်အမင်းစိုးရိမ်ခြင်း'],
        likes: ['အဖွဲ့အစည်း', 'အခြားသူများကို ကူညီခြင်း', 'ကျန်းမာရေးဂရုစိုက်ခြင်း'],
        dislikes: ['ပရမ်းပတာ', 'ကမောက်ကမ', 'အစီစဉ်မကျ']
      },
      paragraph1:"Virgosတွေကတော့ သူတို့ရဲ့အပြုအမူတွေကြောင့်ရေရှည်မမြဲကြတာများပါတယ် ''ချုပ်ချယ်တယ် တစ်ချိန်လုံးလိုက်ပြောတယ် သံသယများလွန်းတယ် ယုံကြည်မပေးဘူး '' ဆိုတာမျိုးတွေနဲ့အဆင်မပြေဖြစ်ကြတာများပါတယ် သူတို့အတွက်လိုနေတာကတော့ အဲ့ဒီအကျင့်တွေကိုနားလည်ပေးနိုင်မဲ့သူမျိုးပါ.",
      paragraph2:""
    },
    {
      img:"https://www.zodiacsign.com/images/libra.jpg",  
      name: 'Libra',
      element: 'Air',
      color: 'အပြာရောင်',
      quality: 'Cardinal',
      ruler: 'Venus',
      greatestCompatibility: ['မေထုန်ရာသီဖွား', 'ကုံရာသီဖွား'],
      luckyNumbers: [6, 7, 15],
      dates: 'September 23 - October 22',
      personalityTraits: {
        strengths: ['သံတမန်ရေးရာ', 'ဆွဲဆောင်မှုရှိသော', 'မျှတသောစိတ်ထား'],
        weaknesses: ['အဆုံးအဖြတ်မရှိသော၊', 'ထိပ်တိုက်ရင်ဆိုင်ခြင်းကို ရှောင်ကြဉ်', 'အပေါ်ယံဖြစ်နိုင်'],
        likes: ['သဟဇာတဖြစ်မှု', 'အလှတရား', 'မိတ်ဖက်'],
        dislikes: ['ပဋိပက္ခ', 'မတရားမှု', 'အထီးကျန်ခြင်း']
      },
      paragraph1:"ချိန်ခွင်ကြီးတကားကားနဲ့Libraတွေကတော့ထုံးစံအတိုင်း သူတို့ချစ်သလိုပြန်ချစ်တဲ့သူမျိုးကိုပဲလိုချင်ကြပါတယ် သူတို့ချစ်သလို ဂရုစိုက်သလို ပြန်ချစ် ပြန်ဂရုစိုက်ပေးမဲ့သူမျိုးကိုပဲရွေးချယ်တတ်ကြပါတယ် ကိုယ်ပေးသလောက်ပြန်မပေးနိုင်တဲ့သူမျိုးကိုဆို ဘယ်လောက်ပဲချစ်ပါတယ်ပြောပြော တာ့တာလုပ်သွားနိုင်တဲ့သူမျိုးတွေပါ",
      paragraph2:""
    },
    {
      img:"https://www.zodiacsign.com/images/scorpio.jpg",  
      name: 'Scorpio',
      element: 'Water',
      color: 'အနီရောင်',
      quality: 'Fixed',
      ruler: 'Pluto',
      greatestCompatibility: ['ကရကဋ်ရာသီဖွား', 'မိန်ရာသီဖွား'],
      luckyNumbers: [8, 11, 18],
      dates: 'October 23 - November 21',
      personalityTraits: {
        strengths: ['ပညာ', 'စိတ်အားထက်သန်', 'သတ္တိ'],
        weaknesses: ['မနာလို', 'လျှို့ဝှက်ခြင်း', 'ခြယ်လှယ်ခြင်း'],
        likes: ['အမှန်တရား', 'ထိန်းချုပ်မှု', 'ပြင်းထန်မှု'],
        dislikes: ['မရိုးသားမှု', 'အားနည်းမှု', 'တိမ်မြုပ်သော စကားဝိုင်းများ']
      },
      paragraph1:"Scorpioတွေကတော့ လူတစ်ယောက်ကိုလွယ်လွယ်နဲ့မချစ်တတ်ကြပါဘူး လူတွေကိုမယုံကြည်လို့ပါ အကယ်၍သူတို့ရဲ့partnerအဖြစ်တစ်ယောက်ယောက်ကိုရွေးချယ်လိုက်ပြီဆိုရင် အဲ့တစ်ယောက်ကသူတို့အတွက်ယုံကြည်လို့ရပြီးတော့ တန်ဖိုးရှိတယ်ဆိုတဲ့အဓိပ္ပါယ်ပါပဲ      ",
      paragraph2:""
    },
    {
      img:"https://www.zodiacsign.com/images/sagittarius.jpg",  
      name: 'Sagittarius',
      element: 'Fire',
      color: 'ခရမ်းရောင်',
      quality: 'Mutable',
      ruler: 'Jupiter',
      greatestCompatibility: ['မိဿ ရာသီဖွာ', 'သိဟ်ရာသီဖွား'],
      luckyNumbers: [3, 7, 12],
      dates: 'November 22 - December 21',
      personalityTraits: {
        strengths: ['စွန့်စားခန်း', 'အကောင်းမြင်', 'ရိုးရိုးသားသား'],
        weaknesses: ['စိတ်မရှည်ခြင်း', 'မှန်းဆ၍မရသော', 'လိမ္မာပါးနပ်'],
        likes: ['လွတ်လပ်ခြင်း', 'ခရီးသွားခြင်း', 'ဒဿန'],
        dislikes: ['ချုပ်ချယ်မှု', 'လုပ်ရိုးလုပ်စဉ်', 'အမြင်ကျဉ်းခြင်း']
      },
      paragraph1:" သူတို့ကတော့ ပေါ့ပေါ့ပါးပါးပဲချစ်​တဲ့သူမျိုးတွေပါ အများကြီးစဥ်းစားတာတွေ ရွေးချယ်တာတွေလုပ်မနေတတ်ပါဘူး သူတို့နဲ့အတူတူပျော်ရွှင်ပေးနိုင်တဲ့သူမျိုးဆိုရင်ရပါပြီ.",
      paragraph2:""
    },
    {
      img:"https://www.zodiacsign.com/images/capricorn.jpg",  
      name: 'Capricorn',
      element: 'Earth',
      color: 'အညိုရောင်',
      quality: 'Cardinal',
      ruler: 'Saturn',
      greatestCompatibility: ['ပြိဿရာသီဖွား', 'ကန်ရာသီဖွာ'],
      luckyNumbers: [4, 8, 13],
      dates: 'December 22 - January 19',
      personalityTraits: {
        strengths: ['တာဝန်ယူ', 'စည်းကမ်း', 'မိမိကိုယ်ကို ထိန်းချုပ်'],
        weaknesses: ['အဆိုးမြင်ခြင်း', 'ခေါင်းမာခြင်း', 'အရမ်းလေးနက်နေနိုင်တယ်'],
        likes: ['အစဉ်အလာ', '', 'ပန်းတိုင်များ'],
        dislikes: ['ပျက်ကွက်ခြင်း', 'ရိုင်းစိုင်းခြင်း', 'မလိုလားအပ်သော အန္တရာယ်များ']
      },
      paragraph1:"Capricornတွေကတော့ သူတို့ကိုsupportပေးနိုင်တဲ့သူမျိုးတွေကိုလိုချင်ကြပါတယ် ချစ်တာတွေမေတ္တာတွေထက် သူတို့ကိုအကြံပေးနိုင်တဲ့သူ သူတို့နဲ့အမှီလိုက်နိုင်တဲ့သူမျိုးကိုပဲသဘောကျကြပါတယ် ပိန်းတိန်းနေရင်တော့ Capricornတွေနဲ့ဘယ်လိုမှအဆင်ပြေမှာမဟုတ်ပါဘူး",
      paragraph2:""
    },
    {
       img:"https://www.zodiacsign.com/images/aquarius.jpg" ,
      name: 'Aquarius',
      element: 'Air',
      color: 'အပြာရောင်',
      quality: 'Fixed',
      ruler: 'Uranus',
      greatestCompatibility: ['မေထုန်ရာသီဖွာ', 'တူရာသီဖွား'],
      luckyNumbers: [4, 7, 14],
      dates: 'January 20 - February 18',
      personalityTraits: {
        strengths: ['တိုးတက်', '', 'လူသားချင်းစာနာမှု'],
        weaknesses: ['ခေါင်းမာခြင်း', 'စိတ်မရှည်', 'ပုန်ကန်သူ'],
        likes: ['', 'ထူးခြားသူဖြစ်ခြင်း', 'သူတစ်ပါးကို ကူညီခြင်း'],
        dislikes: ['', 'လုပ်ရိုးလုပ်စဉ်', 'စိတ်ခံစားမှု ထုတ်ဖော်ခြင်း']
      },
      paragraph1:"Aquariusတွေကတော့ တစ်ချိန်လုံးအနားမှာလိုက်ကပ်နေတဲ့သူမျိုးတွေကိုမကြိုက်ပါဘူး သူလည်းလွတ်လွတ်လပ်လပ်နေ ကိုယ်လည်းလွတ်လွတ်လပ်လပ်နေမယ်ဆိုတဲ့သူမျိုးတွေပါ သင်ဟာရစ်တတ်တဲ့သူမျိုးဆိုရင်တော့ သင့်ရဲ့partnerက Aquariusမဖြစ်တာပိုကောင်းပါလိမ့်မယ်",
      paragraph2:""
      },
    {   
      img:"https://www.zodiacsign.com/images/pisces.jpg",  
      name: 'Pisces',
      element: 'Water',
      color: 'စိမ်းပြာရောင်',
      quality: 'Mutable',
      ruler: 'Neptune',
      greatestCompatibility: ['ကရကဋ်ရာသီဖွား', 'ဗြိစ္ဆာရာသီဖွား'],
      luckyNumbers: [2, 3, 20],
      dates: 'February 19 - March 20',
      personalityTraits: {
        strengths: ['စာနာစိတ်', 'အနုပညာ', 'အလိုလိုသိ'],
        weaknesses: [' ယုံကြည်မှုလွန်ကဲခြင်း', '', ''],
        likes: ['ဂီတ', 'ရိုမန်တစ်', 'အတွေးတွေနဲ့ တစ်ယောက်တည်းနေ'],
        dislikes: ['ရက်စက်မှု', 'ဝေဖန်မှု', 'ပိတ်မိနေသလို ခံစားချက်']
      },
      paragraph1:"သူတို့ကတော့ မသိဘူး Roမယ်ဆိုတဲ့သူမျိုးတွေပါ သူတို့ရဲ့partnerကိုလည်း romantic ဆန်တဲ့သူမျိုးပဲဖြစ်စေချင်ကြပါတယ် လက်တွေ့ဆန်တဲ့အချစ်ထက် စိတ်ကူးယဥ်ဆန်ပြီးနူးညံ့တဲ့အချစ်မျိုးကိုလိုချင်ကြပါတယ်",
      paragraph2:""
    }
  ];
//filter the result array
  const callback=(element)=>{
    return element.name==signName;
  }
 let resultArr = zodiacSigns.filter(callback);

 //personalityHeader
 let personalityHeader=document.getElementById("personalityHeader");
 personalityHeader.innerHTML=signName+" Personality Traits";
let left = document.getElementById("left");//get the left box and assign to left
 left.innerHTML=` <div id="leftBox">
 <ul>
     <li>Element: <span>${resultArr[0].element}</span></li>
     <li>အရောင်: <span>${resultArr[0].color}</span></li>
     <li>အရည်အသွေး: <span>${resultArr[0].quality}</span></li>
     <li>အုပ်စိုးသောဂြိုလ်:<span> ${resultArr[0].ruler}</span></li>
     <li>လိုက်ဖက်မှုအရှိဆုံးရာသီခွင်များ: <span>${
        resultArr[0].greatestCompatibility
    }</span></li>
     <li>ကံကောင်းစေသောနံပါတ်များ:<span>${
        resultArr[0].luckyNumbers
    }</span></li>
     <li> ရက်စွဲများ: <span>${resultArr[0].dates}</span></li>                                               
 </ul>
</div>`
/*get right box */
let right = document.getElementById("right");
right.innerHTML =`<div id="rightBox">
<img src="${resultArr[0].img}"/>
</div>`;

/*get the personality */
let personalityContainer = document.getElementById("personalityContainer");
personalityContainer.innerHTML=`
<div id="personality">
<ul>
<li>အားသာချက်များ-:<span id="bolding">${resultArr[0].personalityTraits.strengths}<span></li>
<li>အားနည်းချက်များ-:<span id="bolding">${resultArr[0].personalityTraits.weaknesses}<span></li>
<li>${resultArr[0].name}နှစ်သက်သောအရာ:<span id="bolding">${resultArr[0].personalityTraits.likes}<span></li>
<li>${resultArr[0].name}မနှစ်သက်သောအရာ :<span id="bolding">${resultArr[0].personalityTraits.dislikes}<span></li>
</ul>
</div>
<div id="par">
    <p id="footp">${resultArr[0].paragraph1} </p>
    <p id="footp">${resultArr[0].paragraph2} </p>
</div>
`;
/**change the head text */
document.getElementsByTagName("text")[0].innerHTML=signName;
document.getElementsByTagName("text")[1].innerHTML=signName;

/*light-dark mode */
 // Get the icon element
 var icon = document.getElementById("icon");

 // Check if there's a mode preference saved in local storage
 var isDarkMode = localStorage.getItem("darkMode") === "true";
 
 // Function to set the mode
 function setMode(isDark) {
     document.body.classList.toggle("darktheme", isDark);
     icon.src = isDark ? "sun.png" : "moon.png";
 }
 
 // Set the mode based on the preference
 setMode(isDarkMode);
 
 // Toggle mode when the icon is clicked
 icon.onclick = function() {
     isDarkMode = !isDarkMode; // Toggle the mode
     localStorage.setItem("darkMode", isDarkMode); // Save the preference in local storage
     setMode(isDarkMode); // Apply the mode
 };
    