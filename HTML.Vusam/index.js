// fullpage 
$(document).ready(function () {
	//配置項 
	$("#fullpage").fullpage({
		//可以為每一個section設定background-color屬性 
		sectionsColor: ["", "", "", ""],
		//定義是否通過箭頭來控制slide幻燈片，預設為true。當我們設定為false，則幻燈片左右兩則的箭頭就會消失，在移動裝置上，我們可以通過滑動來操作幻燈片 
		controlArrows: false,
		//每一頁的內容是否垂直居中,預設為true.一般保持預設值 
		verticalCentered: false,
		//滾動速度，單位為毫秒，預設為700 
		scrollingSpeed: 700,
		//定義錨連線，預設為[]。有了錨連結，使用者就可以快速開啟定位到某一頁面 
		//注意定義錨連結的時候，值不要和頁面中任意的id或name相同，尤其是在IE瀏覽器下。而且定義時不需要要加# 
		// anchors: ["first", "second", "third", "fourth"],
		//是否鎖定錨連結，預設為false。如果設定為true，那麼定義的錨連結，也就是anchors屬性則沒有效果。這個配置項使用的比較少 
		lockAnchors: false,
		//定義頁面section滾動的動畫方式,如果修改此項,需要引入jquery.easings外掛，或者jquery ui 
		easing: "easeInOutCubic",
		//是否使用CSS3 transforms 來實現滾動效果，預設為true。這個配置項可以提高支援css3的瀏覽器，比如移動裝置等的速度，如果瀏覽器不支援css3，則會使用jquery來替代css3實現滾動效果 
		css3: true,
		//滾動到最頂部後是否連續滾動到底部，預設為false 
		loopTop: false,
		//滾動到最底部是否連續滾動回頂部，預設為false 
		loopBottom: false,
		//橫向slider幻燈片是否迴圈滾動，預設為true 
		loopHorizontal: true,
		//是否使用外掛的滾動方式，預設為true，如果選擇false，則會出現瀏覽器自帶的滾動條，將不會按頁滾動，而是按照滾動條的預設行為來滾動 
		autoScrolling: true,
		//是否包含滾動條，預設為false，如果設定為true，則瀏覽器自帶的滾動條出現，頁面滾動時還是按頁滾動，但是滾動條的預設行為也有效 
		scrollBar: false,
		//設定每一個section頂部和底部的padding，預設為0，一般如果需要設定一個固定頂部或者底部的選單、導航、元素等，可以使用這兩個配置項 
		paddingTop: 0,
		paddingBottom: 0,
		//固定的元素，預設為null，需要配置一個jquery選擇器。在頁面滾動的時候，fixedElements設定的元素固定不動 
		fixedElements: "",
		//是否可以使用鍵盤方向鍵導航，預設為true 
		keyboardScrolling: true,
		//在移動裝置中滑動頁面的敏感性，預設為5，是按百分比來衡量，最高為100,越大則越難滑動 
		touchSensitivity: 5,
		//是否迴圈滾動，預設為false。如果設定為true，則頁面會迴圈滾動，而不像loopTop或loopBottom那樣出現跳動，注意這個屬性和這兩者不相容，請不要同時使用 
		continuousVertical: false,
		//錨連結是否可以控制滾動動畫，預設為true。如果設定為false，則通過錨連結定位到某個頁面顯示不再有動畫效果 
		animateAnchor: true,
		//是否記錄歷史，預設為true，可以記錄頁面滾動的歷史，通過瀏覽器的前進後退來導航。注意如果設定了autoScrolling:false,那麼這個配置也將被關閉，即設定為false 
		recordHistory: false,
		//繫結選單,設定的相關屬性與anchors的值對應後，選單可以控制滾動，預設為false。可以設定為選單的jquery選擇器 
		menu: false,
		//是否顯示導航，預設為false。如果設定為true，會顯示小圓點，作為導航 
		navigation: false,
		//導航小圓點的位置，可以設定為left或者right 
		navigationPosition: "right",
		//導航小圓點的tooltips設定，預設為[]，注意按照順序設定 
		// navigationTooltips: ["first", "second", "third", "fourth"],
		//是否顯示當前頁面的導航的tooltip資訊，預設為false 
		showActiveTooltip: false,
		//是否顯示橫向幻燈片的導航，預設為false 
		slidesNavigation: false,
		//橫向幻燈片導航的位置，預設為bottom，可以設定為top或bottom 
		slidesNavPosition: "bottom",
		//內容超過滿屏後是否顯示滾動條，預設為false。如果設定為true，則會顯示滾動條，如果滾動檢視內容，還需要jquery.slimscroll外掛的配合 
		scrollOverflow: false,
		//section的選擇器,預設為.section 
		sectionSelector: ".section",
		//slideSelector:slide的選擇器，預設為.slide 
		slideSelector: ".slide",

		lazyLoading: false,

		// onLeave: function (origin, destination, direction) { },
		// afterLoad: function (origin, destination, direction) { },
		// afterRender: function () { },
		// afterResize: function (width, height) { },
		// afterReBuild: function () { },
		// afterResponsive: function (isResponsive) { },
		// afterSlideLoad: function (section, origin, destination, direction) { },
		// onSlideLeave: function (section, origin, destination, direction) { },

		onLeave: function(){
			jQuery('.section [data-aos]').removeClass("aos-animate");
		},
		onSlideLeave: function(){
			jQuery('.slide [data-aos]').removeClass("aos-animate");
		},
		afterSlideLoad: function(){
			jQuery('.slide.active [data-aos]').addClass("aos-animate");
		},
		afterLoad: function(){
			jQuery('.section.active [data-aos]').addClass("aos-animate");
		   //jQuery('.fp-table.active .aos-init').addClass('aos-animate');
		}
	});


	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
		initClassName: 'aos-init', // class applied after initialization
		animatedClassName: 'aos-animate', // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 200, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 500, // values from 0 to 3000, with step 50ms
		easing: 'linear', // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	});

	
	$("#index-gif").vegas({
		cover: false,
		timer: false,
		slidesToKeep: 0,
		delay: 2000,
		slides: [
			{ src: "img/index-gif-1.png", transition: 'fade' },
			{ src: "img/index-gif-2.png", transition: 'fade' },
			{ src: "img/index-gif-3.png", transition: 'fade' },
			{ src: "img/index-gif-4.png", transition: 'fade' },
		],
		// transition: [ 'fade', 'fade' ]
	});
	$("#contactus-gif").vegas({
		cover: false,
		timer: false,
		slidesToKeep: 0,
		delay: 2000,
		slides: [
			{ src: "img/contactus-gif-1.png", transition: 'fade' },
			{ src: "img/contactus-gif-2.png", transition: 'fade' },
		],
		// transition: [ 'fade', 'fade' ]
	})

})



