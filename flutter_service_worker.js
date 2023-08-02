'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4402ae52665012a8b9c3cc72bbd4ee1d",
".git/config": "4f3056236e6d6a3164a4116f508ccb76",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c4ea838f139a1153d10c00443905e9b2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5e64ec4a0a700e318bc713af410f8236",
".git/logs/refs/heads/main": "d2a350681287d45e0172a5f2ac0df51e",
".git/logs/refs/remotes/origin/main": "623b0f5d3cbe20eb2f255cb92ac587a7",
".git/objects/02/bc9bed31fe7e2d55fcd86fbccf6234994b148d": "56ce85c7c84ea9f4e4deacc5f61c45f2",
".git/objects/03/659c912a1f9c76d634eb933fc3a4f516c19d96": "b81e5eebce3c5bddcbe1be4aec5d55e4",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/def197f80e374f3d1c1345e1973975a2c5a8e0": "68cbb93669843332476eac3265a7fb49",
".git/objects/07/4e0580a49b04a77f40f87bd7ded0e2e2d94f1a": "4a9d747821b8bb9f2afabff77458a6c4",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/ceab2ae635a22ac4dac5b046264d34fcb95079": "a2f112a30102b823149a2524de26b3a5",
".git/objects/0c/91b737889335f708f871d60c772f7f1c2812af": "2b5f11795827b915af04027a8f60cde3",
".git/objects/0d/0f195970394182fe7a8877671de86c0a0c4125": "33d22e0f1b0403782193d4ff6f655741",
".git/objects/0d/132636d452b33ac7b53ebf7fdecd059ae316be": "cf7b0cf6e5a0f5ebfa565ff7118edb4d",
".git/objects/10/63a0fae5630ee10ff131de0f67f4955d6c7b8f": "38d9f5951e19df698ac2a9417677f499",
".git/objects/11/f7b6d1622c54452eb5ba6d992a0abe41832357": "1eb27956e4381b893a5587a17c0eb297",
".git/objects/12/1046f48c63afc7dd73eb571460f06d545b4f51": "0dc88f2dd73877b45e9da34af8305b24",
".git/objects/14/0a192a2007d33490a01fcebe4ceaaef7c1563d": "358b965df3a3e45c006cbdf4cd72ef9d",
".git/objects/16/b011861f740239d0e4a00847c7dd596cd23b07": "f6df9fcc2a12071d58e6014f55b6ecac",
".git/objects/17/d5f5de19bb3e2e434fc7c232e46d13dd1b387d": "0659ea7a35987c35eacd934da348916f",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/2e93cb9ab01e3834a50d459f05d7958772f5d8": "4a9e83110876edee0881d4aa273e466d",
".git/objects/1f/4ea9d9986d4d15473e9955aab8bedd321185d5": "aca70101d601bed24726e19404b26a18",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/bd40e85d6648a3e927064e5e79143a8fa6883a": "4c548c6b5c23d7ce9f54b9186aacfbf9",
".git/objects/20/24889acd2995f3cf99e601ad47f1b02755c03a": "973853158049e9159169aa7476659421",
".git/objects/20/bd5eeacbce9e56fabc38e2762f77098aa2afa6": "52b99d253b6da5b2a77612760effd960",
".git/objects/22/2a94d664acebe0e5ad4b6371953b082571613f": "310c8d9cdd883ff4127732619d909456",
".git/objects/24/fb32676a23835e798c2041f4b828489acd4580": "1b95de6526e16778f891b97bf1dfb8c5",
".git/objects/27/6513e545025a68c7e069e6a90c795ba96d9a55": "5a33e715369b0f9b08dbcc2cc6b8ec07",
".git/objects/28/36714b0ad0c7ff8939c303156da6b98497318f": "c27e794515c5243ca2f5f73353e98b32",
".git/objects/28/a0aa97e7f3c45d73612c16dd912e106e6d36ad": "c4b17cdaebd7cfa246411456485c7a0e",
".git/objects/28/dc66b82d6fe0f88bb45a0449a070e090c5114a": "562547754db3a559250dc740cbd75434",
".git/objects/2a/3b6a0e3035315b92396bb6921ec5bc1b0aacc2": "85591b1eec21e424aac4252c99f4caeb",
".git/objects/2c/3033dd3cc3d8a6c0ebd494bf4668f4862415dd": "aaea58bf229dff35db0867fd0896fd19",
".git/objects/2c/6a83e00d346e2bd9c51eb10c0c5d8dbb776cbb": "9fb74a63ea49704c765b3e51cc2fb24d",
".git/objects/2c/dc8f485c73ee23a3de549f7a67bd7c13d799a4": "4e40f1337998dd14b4c04e19f0030270",
".git/objects/2e/e65e94926319d26984f168114e918eab9f2179": "ab9088c350b93f22f305647bad851f1e",
".git/objects/30/ba8602f26caa782cea7024aef2483753f6c78e": "bdc64f81d4bca92cd1982183dfa0649a",
".git/objects/31/03f988848023e256353e2a69f4e7e13e8b6758": "21403d122293301d8762ee9099b51323",
".git/objects/31/78cfec39c3baa52c8a47c4ad6aabde359e933b": "b8d1184afc9fbbaa76d7164dab6ff98f",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/3bd1f6d848b4bae9f85885a6023a5347f73d5c": "faa1491ad4cb466f4366fa402d215f20",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/4491d0709240a176557a3b4024d5548e8b1abd": "6fc3beeec401f4c7152dc3170ba585a1",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/3c/01a95c8de6e88452d638d63bf683ff72475bce": "6f7078567906d6855cf5911e031ffb20",
".git/objects/3d/3c4e9590bb948bc774cda8f530046fd64b75fe": "e279f4155b2f4bd811615a2bb8224af4",
".git/objects/3f/a30a9b6d16c019d0a34f8062ddbbd71c6866f9": "bea217dd2db0c258c8b4f81aadc6e977",
".git/objects/40/7a20f266d1dabe9fec16298a7a177bb83057e8": "44de67146ecaeb4659ccef6ddd24d3e5",
".git/objects/40/be57872f7d96a4972b885a6942a7f2802936a8": "170da5e1f844e5930bce61bc4c9d0f4e",
".git/objects/42/f20603e613d7c848253548f4c2476b5d7e32ba": "e17df94ed4886d1e30082a34d4aee19c",
".git/objects/43/811901ee1756e46eb9fc445d7a156572ab586f": "2c47e2ee2a35a3d9475f5ce41c4277bd",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/49/3eb69f25819d0d102f8539990709eb7133828f": "32c7f2aaec7fd2ec103fd547cadf1669",
".git/objects/49/bcbf421a4514602809bbccc5462a0b98db1ce3": "e125352951c15d881891df072baf81ed",
".git/objects/49/f67d296e601a727f7c81cec8d5c571f7561db2": "a9e33dcff97f34b0938a8d92cd3b5d43",
".git/objects/4a/0ebcab55158fe44e1ace9c04f43d81d9cdb090": "5faedd4563805bb30d133673bd8bcf03",
".git/objects/4b/9ecb994d3e59845c8c2cf0c7c927edd433e6ab": "92acee9f662fa96d72c7d18be247e56c",
".git/objects/4c/985d042d0b2ed33bc6a94f3bd5dff5bc4c1f51": "ab6526f5f595a4d74462e68a96e9f770",
".git/objects/4f/c135b57209c573d6724ed92e703e848130e877": "db41efaf9deb61d65b1d7fde41ed64c0",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/0679f00420f0f0d738d14f11f293d9e71a8593": "01ad092db8c849113c0b43cab8b4d44c",
".git/objects/58/8f3602b68e76f6e74c95884ae01db655fe76c6": "62f2c8900cffef373279b2a8a943099b",
".git/objects/59/a538a517aaacf80b1c8a96f16fe1144ffe033e": "a95ccd98d294e2d000ff8298e46965f5",
".git/objects/5a/2f9f8d1f64a6d261786d21f720fb4762150462": "865e9987488313caf8ad3ec423500e39",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5d/4ea32678388636372d9a5dc55b314f35a75e85": "91bec11a6f4e28f267896509d5e107b5",
".git/objects/5d/8121e0e4c59ab3405855a73874770224979ff4": "78848d13c740f6f507c5dc19cd072c30",
".git/objects/5d/fd2b2d0ed942e73f045fa9b35ab7671800c340": "d10245168180da51f459bf6557f09e48",
".git/objects/5e/af75a0895ed64b10fe1694189b5e7a94fa4a53": "a8f950a99839569f6c43f3e0ab197185",
".git/objects/5f/c1ef289640d295f9d094a1533c4f50551a0007": "b824926c524b83c540cc6500653ee0be",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6b/91bffd08eade7d498b8f90b0990eda0b3e9788": "d4aec3797529ec79788dd9bc2d76d91d",
".git/objects/6f/e3a4ecd972ef5f19acefe681d9971b08634499": "514e7347306a2a06ce6eabb76192382c",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/71/95afa99fe35ddf427704e49f0764d779c447c6": "1bb442ec7ce346a278357de22aa94150",
".git/objects/71/cdc4fbfde74a7e0d6aaec76b9b318ed81b78e0": "c2d9a32ce462cde39e2f893337971505",
".git/objects/72/1a2eac36ad8056d276acbf059a338be88f6483": "bafc7810090ef815b58686dbbc62b902",
".git/objects/72/3a39e8c99057452ed8dd146023aa5d2737665e": "959d3bc44a93cee40ac6b2c3690cb317",
".git/objects/72/5331467682b3802ee8210c8fc2c9720c7ee1f0": "d7d459c6195357f9fd18690dbd34c5d4",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/74/e9c079a5ac103ac358e91962d2731536b9bb55": "4bcf7d2495b79c3252c80f2869ac6d99",
".git/objects/75/61bb7eb05861802590cf96b51e84af097f6a11": "6823ae73bf9ca7951111cb89e389abbc",
".git/objects/79/476baf5935510c291bf044de07e76b4325f885": "18635cb9e28d25d09ea33365f031f8db",
".git/objects/79/bc75ae16dc9771c01faafeaa3ddccaf124cfed": "0c6e1f75056dd4db4b94c346c716d9ed",
".git/objects/79/c310ffef40b4296d6e455b02d95b3e9a943aef": "6013f60aad0c31d556c5faf798723452",
".git/objects/79/d0671d1e7bed0849caa83733dab1a91ff7d3dc": "0a715c6dc3758123fd1d771445b2db5f",
".git/objects/7e/dcc79d28e86770ad4e24c0b4cbd1f5afb56d64": "2c317f923de407901a6df1cc5114405f",
".git/objects/81/650969f21ea8fc48d64158ba81280a5f0e2317": "f2a5d1e222aa396d11cb836a56b9c377",
".git/objects/81/944c478a100e771b5256eb714666830ae6f121": "5c6027c4611e1a58d165f837f993eeab",
".git/objects/81/9f20c7717870e397888be0f7a6f50ad89d4cce": "bfa6f8e29aedbaac89e6809623be8ac5",
".git/objects/82/89a433bf33e7574c806feb3ddb824d954f0a4a": "103badea53a9c45bf8ba6aeaea3a146d",
".git/objects/82/c34e44219b48ad09071c86bc5833ba3194a895": "8b3119c4c0769cc86f540b22119f1031",
".git/objects/84/4fdcd4259b0754996433613e37938a6ef8e6aa": "271af65415399c2d69f867dd888994f5",
".git/objects/86/02cc8a151999edf7219fe7c484c4d2aa6dc451": "2cb3f96c44892802fd763871f4b72bcf",
".git/objects/87/cc9161ce3367e3420b4cf1c3660c12aed0ddc4": "795e13e5631a2959252c08f2195a1032",
".git/objects/88/582ea57af883cd7950424eb0d51587eaee486b": "680304386743c41ebad93c446ee71a9c",
".git/objects/89/d62ed345f75085535c8963fd42bc7bbb7f6a38": "96592b03246674dbfa2fa6b9354d80be",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/4d999a18a57f61c1ff4278b59aa34b72357be7": "cbab3b31c2fc964d553d564add93a026",
".git/objects/93/589a959e31fdb32d73d3f84748d1914b6c8e65": "0acce46ef40347991c8efb42118d595a",
".git/objects/94/33945dc927777fe3bc68ea3caff7e2fd100df8": "0f0d7d682e66ca24c598e0a867ad5427",
".git/objects/95/884f6e576d23fe61e0d2a3d19faf5cd0db7d90": "b89dbb7884b32ccb1244421c67fb8db2",
".git/objects/96/6d884cb2e1ba330c896a62aeede8b948d7bd09": "18f3df4a0422d05e56cb51c07f6caa49",
".git/objects/97/7ec1c5d37b1a40e1fc9ae567ec49ff6bcf1c21": "288bf83cfc34816dcd29e9f7d029cdcf",
".git/objects/9c/fb0ecc8176ceacff7585171452b97191d4a5d3": "88887930af106e758c3f5b67827fbf5e",
".git/objects/9f/87a73d660d2a8bb09d4b2a99e62bac707cabc4": "05abd2f785287f77c1069c3fcc725906",
".git/objects/a4/8ea4421277615a02c537713fa9f66662b7fb05": "438b3401684b1208c8beee492adb79e5",
".git/objects/a9/1d0b19c6c6f805aac51f804ce84cfd1e4cd50b": "17124e0ceb435195d9ca77476c2789bb",
".git/objects/a9/9b226143aa4a4cd0b84179ffad84f65c9c65f0": "f2a087500c1f7eb0e9ae7de27f740c2b",
".git/objects/a9/9f757e68c48bebc94a78a0b93d7e244cb96129": "d1910b2db9af37c1f0125f9d3623f718",
".git/objects/aa/402142f9481c9add01bc40be6125bc2d3a0a9d": "62aae796df6a3a3233447b3206e7bdcc",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/23d3ab735f1dad822169852d0507d722712f00": "a801a2aa486330a710df53b070a47628",
".git/objects/b4/c7af86c2fa016d2905aa43d582b1767e323fa4": "d724ebabfc50a0199663827f274257f5",
".git/objects/b6/02993981f24015c830c9ac8c397d20606e97c1": "57c3163a206619b8fb69c5301386497b",
".git/objects/b7/d0693f66e1504382588e1b8221e440ff7b517b": "428b0652a33a65445eede1d931172a3d",
".git/objects/b9/0b603000df723ac5dd99c26e8575a37252ad1d": "8bd9da2b53cb398ff681ca4eba85b12c",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/56e0b71850c4858784c23370829eec39b50854": "ec96fee804a32476c9e100fa8180a8f8",
".git/objects/bc/9f36808e4db5172f9ab87ba2517f169305a9d1": "827c598d0c5849bad8e60603fa9eec56",
".git/objects/bf/9cfa2a919a5eed0a7142803c0e563cf7d2bb21": "4de51421ebc9d04209b96f9e5e2d6a8f",
".git/objects/bf/b4ab66d8d341ccf28c5cab1e846764fc1b42b3": "373ebf2f5eee2d7a444e2941cbe1c2ae",
".git/objects/c0/1d3786d1f035d913da2055dc96b2005104c8cc": "8abe4044c8cea9e628f4468937fb7d64",
".git/objects/c0/909e11bf7d3dd98dfb34537959213bf6c603df": "abe5aec459073578c08e197dd2dfab36",
".git/objects/c1/c183730f39f9744aeac03d5450c885e3c2feb0": "f71225c5bbdf5232fdcf0b14eafd440a",
".git/objects/c3/10a993fc67362625f717826579a1c11a539c5b": "81459b6b85a7f70235a512fcf84b1c92",
".git/objects/c3/5d7f22243d49987d50dc3a836e0cbfd864b2e4": "6bd0f588fff429295e78ddaaa922a7b7",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/1cad87b8b272a2e4450a0aa9bcf4bd8e18a4ea": "863771d3e8f59cc5b88904332d7719ac",
".git/objects/c5/96c0570459ce80aab9a18018693955e1ecfcc6": "35cc23510f4501cd0ddc61c5987ef4a3",
".git/objects/c5/c4f4b3f2b6fc5cb246693d31a4a03337f84fee": "2684b20a7ded3b24971b6318ab800e35",
".git/objects/c6/4569ab13590d8f2ec6301d7009ead376a87043": "3150d6e6b80884c061eaf504e89ce759",
".git/objects/c7/5f4945d07620eac96d47fec5a9dbcd364b2ba9": "2c4c81b520303960f334d2d109f130e7",
".git/objects/ca/1cdd11ece91ceb8a666aa8f2e67ae4bb3e729c": "8ffbddeab29a58b1a616b1a8552b2616",
".git/objects/ca/21f4fe2becfa6c1834352343d0cda7051e84e9": "b463e1388cedf7ab33c21c9676917e33",
".git/objects/cd/937098777254b3a6210409c6815139eb807580": "af9e9a7ec1357ae506251d0ac4f82573",
".git/objects/d2/96651f51690de9f44d75240f18cc53c160c65c": "b32988944204d6ef3df5ad41054359f5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/a3c5fdce17c5491c3f748400b5eface726cd50": "be802864460b0a089c404f4f78a333ec",
".git/objects/d6/ec81d8459d9e74c0589353dc16343331cd584e": "793f8e376018ccb37275b449b79a6e8f",
".git/objects/d7/fa5433489862d41c7014857689b205497084dc": "fe2c474ce5225486bb761fe98698fdcf",
".git/objects/d9/1a86735ad3f0fd713c2cd03d3489fed2f567d4": "17257336fda74a237244f2372b59c1ab",
".git/objects/da/95ce21301186b596b3715987c7f1fd91a70e02": "5826cf98cb14d1f66ef2505892208eba",
".git/objects/dc/3822a63aef128d4754b27097e15f62aacd3681": "a2a37d37bf3778477431f9d80cc073bb",
".git/objects/dc/dbb564ffbc98e0cfa3f968241158b782d5df55": "51b8bd1ba63937dcc3b0e249bbcdc37a",
".git/objects/dd/063c68baa41afe1d64211781e5db7834400618": "e47f424a3b54727b5900d639307f6d8f",
".git/objects/e4/d4aacd410da2c7c8919dbdc4be5358d333b2bc": "c9ec071493ee83bdff98b154e3e1ced2",
".git/objects/e5/bf90117e331f6d608555f4e8f787fbbbf61679": "c053799bc07539247ef161f2cfc67441",
".git/objects/e7/c7c8247944b6db7e2cec7c32e56e5cfc416648": "da319bbf6fb6db50c1ee183ef4846d14",
".git/objects/ea/2b71471636f87ece585a8615fa429216f69118": "ecacf10059cfad851e1430368e31b164",
".git/objects/ee/c6ca69c68b2f9f5f523df6c350b8241b2f6acf": "787922f18df1b7dfd47386ef8c028b25",
".git/objects/f1/a9d297a7d2744f27cda51f3fae75f09fabc396": "f9c0c5f1bfc048e0bfee888746877dfa",
".git/objects/f7/adf6f5fea3c417af5bc7b5994f0f0c4a1c4c02": "a8a01ecc4518f0e39202845c01823af7",
".git/objects/f8/655e13d16461fbbb86328bc814ac1d89c1f5fc": "5570ec9aa63660eed620c5cfde600ea3",
".git/objects/fb/6d097ce73374c8204fd824ac991c47ead7c5c9": "1ce771132289d6df35644b44b684019c",
".git/refs/heads/main": "07adf99495a75cd518165c11aa1002dc",
".git/refs/remotes/origin/main": "07adf99495a75cd518165c11aa1002dc",
"assets/AssetManifest.bin": "eb5a2d0849ec27f50b1d356be8daeba9",
"assets/AssetManifest.json": "ad0e20cd90f67e03f4dbb8b2bf0535ce",
"assets/assets/fonts/Lexend-Bold.ttf": "4d5d99a2bed14c4c23950731cf6412a2",
"assets/assets/fonts/Lexend-Light.ttf": "f5f37cf9f05f51ab6caf78712fa17fc5",
"assets/assets/fonts/Lexend-Medium.ttf": "8d7edc33c0dc0daaabd638f21bcdf8fb",
"assets/assets/fonts/Lexend-Regular.ttf": "c0dc51d28f78a1d929e777bbfdb514cb",
"assets/assets/icons/academic_cap.svg": "5441f9c030ee8088e13769372d850d60",
"assets/assets/icons/add_people.svg": "24b0e8ee9fa8e5fa0d3c53027c1920ee",
"assets/assets/icons/badges/1_discipline.svg": "02da79dfabf89d486e76e9d7aeb4fdd5",
"assets/assets/icons/badges/1_focus.svg": "5fbd4c4287af75467e0ef328122255a0",
"assets/assets/icons/badges/1_hardwork.svg": "2aa1df285dae74cbe12eb611a8bda58f",
"assets/assets/icons/badges/1_persevere.svg": "ea26337d77c72e477537f533de7258f9",
"assets/assets/icons/badges/2_discipline.svg": "162d2b2478c105ad3d3a139869d0d8b9",
"assets/assets/icons/badges/2_focus.svg": "fcec45de7563dc2fbfd25bd2f7d3ed6c",
"assets/assets/icons/badges/2_hardwork.svg": "cca2223b3ffb41b508ff012b09e56024",
"assets/assets/icons/badges/2_persevere.svg": "3c82e2b26a9ead29ebea9f00f0c8c0ab",
"assets/assets/icons/badges/3_discipline.svg": "9fddc3810f5c173a2e36f8eb693878f9",
"assets/assets/icons/badges/3_focus.svg": "acd42204f790dff5d4a6fa70fc9093bd",
"assets/assets/icons/badges/3_hardwork.svg": "f383cffd8300794259d0c4609aa7c9cf",
"assets/assets/icons/badges/3_persevere.svg": "c3303862f65a95403b6ef5617f500593",
"assets/assets/icons/badges/4_discipline.svg": "b2806c8183ab3c300b4e7c10417ea955",
"assets/assets/icons/badges/4_focus.svg": "4e7d2959a3ac7bcddc6ac3af3c6a1d82",
"assets/assets/icons/badges/4_hardwork.svg": "3fd5a3c885e2883d254326fe017d1230",
"assets/assets/icons/badges/4_persevere.svg": "1406be95c4ae5a47faeed16d43681d88",
"assets/assets/icons/badges/5_discipline.svg": "209044b435a1e5851b517d0c07a8d9b3",
"assets/assets/icons/badges/5_focus.svg": "d9615d3fedd2fc7d8208364c9db2ce2b",
"assets/assets/icons/badges/5_hardwork.svg": "b8358c07756822b50880ce52934496d6",
"assets/assets/icons/badges/5_persevere.svg": "b679c7c839b0e5c283146a905809a6e4",
"assets/assets/icons/bookmark.svg": "8ac10045c21232d0e566fcee740851e1",
"assets/assets/icons/camera.svg": "4ed69c333e3989795c517991f491038e",
"assets/assets/icons/camera_off.svg": "1cca0668aa8a6f6d35a3095ed899536d",
"assets/assets/icons/chats.svg": "3a54029ab5f3c43c05ddec561f843636",
"assets/assets/icons/close.svg": "a820f426a2b52d57a2e666100a19eb08",
"assets/assets/icons/colored/clock.svg": "c324d2e0f521dd963b65b4cde8e3ff2c",
"assets/assets/icons/colored/coffee.svg": "0fcb25c6de55a8d5ba6bb2e8e3fa93e4",
"assets/assets/icons/colored/streak.svg": "64be7cf725f97d23c27cca721c3362a2",
"assets/assets/icons/delete_people.svg": "3304c31cda96b9fa27d7936562cc0c19",
"assets/assets/icons/document.svg": "816b1a8ccba7ea02a53f7ee558130c94",
"assets/assets/icons/documents.svg": "069e38acbddacbc968cc32775b19cd54",
"assets/assets/icons/edit.svg": "b00802248bde7ec9a1d357d147b7e291",
"assets/assets/icons/facebook.svg": "8731f495b35f6a37d850de25b9c656f7",
"assets/assets/icons/fast.svg": "f1f3390b2fbb104e64078a342a5314fe",
"assets/assets/icons/file.svg": "ac6213f4425a74fe4a2e8f5cd3a1da7d",
"assets/assets/icons/file_add.svg": "d4204456a9633e539ed499cfc4bacd68",
"assets/assets/icons/file_change.svg": "754972791ee224dafd6a16f60acb37ed",
"assets/assets/icons/file_unknown.svg": "6eebc340e7b1cb6bcc7f7ca48a6f4fac",
"assets/assets/icons/flashcards.svg": "b54c8635fb2b618442c8114e978c06c7",
"assets/assets/icons/folder.svg": "3e5e91b3ca7c37c81032f69fd48b6cea",
"assets/assets/icons/folder_add.svg": "96ee0dbb2024b5b3919ba6fa6b4fc661",
"assets/assets/icons/goal.svg": "9e2cf86d038ef0ca0236b74afd579dc5",
"assets/assets/icons/google.svg": "b2657ca6c17cfaade0023997c22cec9f",
"assets/assets/icons/google_play.svg": "4b9aa68e69116da6172d135b253143b8",
"assets/assets/icons/hide_participants.svg": "71bd3feed27374fc8971ee51108775e4",
"assets/assets/icons/home.svg": "3440f9431d9bf67faf5fd6522cc0aa6d",
"assets/assets/icons/home_outline.svg": "d6034f99c87d06ae9678d6a6d061563a",
"assets/assets/icons/image.svg": "1b8aad8c0067701a907286d8c105c294",
"assets/assets/icons/info.svg": "42a32f20c40fe0dcc2040dd5558c449d",
"assets/assets/icons/log_out.svg": "4bae0ea123cc263d8a4470641fe99132",
"assets/assets/icons/mastery/1.svg": "e656bcef1e5996fbb61565a62a784ab5",
"assets/assets/icons/mastery/10.svg": "a7c8e34446b7d1b20a2f5cfcd9e75bde",
"assets/assets/icons/mastery/2.svg": "fae82f50d7200ba0abf7fa6d008dba9f",
"assets/assets/icons/mastery/3.svg": "4b012665ec178a697ff3baf70fe86aa6",
"assets/assets/icons/mastery/4.svg": "421ae4dcd1a8a6d9545b431f26bcd884",
"assets/assets/icons/mastery/5.svg": "3c2807deb2e7ab8649e34209bc8b2c84",
"assets/assets/icons/mastery/6.svg": "4bf14806fb8b98ca72739365d4b47918",
"assets/assets/icons/mastery/7.svg": "7c250201a966f39d33becd51849d0581",
"assets/assets/icons/mastery/8.svg": "252505c11b0b1e9b51efc23b6d23254e",
"assets/assets/icons/mastery/9.svg": "e11b83d246df2363f6b2b7e4da9d09a8",
"assets/assets/icons/memory.svg": "efa8eb2bd3a3167b2558c41a8d099f8e",
"assets/assets/icons/message.svg": "1a9e2e6e777655eb0d5aa8638adf4f3c",
"assets/assets/icons/mic.svg": "4081140a7ce0d7ff3be4f66c07f1a586",
"assets/assets/icons/mic_off.svg": "c7e87966624c9f18728501668efd881c",
"assets/assets/icons/more.svg": "8dafef5bb97e70979a524e488f49dcc8",
"assets/assets/icons/music.svg": "eee35fb7e89bdeaeeefb668657ad6f85",
"assets/assets/icons/notification.svg": "c793e5f6f7042e2ba31b9c68cee18f53",
"assets/assets/icons/palette.svg": "6461216747b9483830269bde1c137f98",
"assets/assets/icons/pause.svg": "4d1d76793f3e6dea933e3937dcbc4baf",
"assets/assets/icons/people.svg": "9028437f3d3f6296fec17a568af1c75b",
"assets/assets/icons/person.svg": "09d431272bc15990e8575fccabcc5cd6",
"assets/assets/icons/pin.svg": "7bd45291fa86ab881be0eba1d33bc158",
"assets/assets/icons/play.svg": "3553d2ed4ee49f3ae9e19726e0306a9e",
"assets/assets/icons/profile.svg": "0999f67668f300f1f81de2f87291f4e1",
"assets/assets/icons/reply.svg": "e9d03faab6005cb5c9d450add0366482",
"assets/assets/icons/reset.svg": "ffb270c65385ae15824a1431bb420ad5",
"assets/assets/icons/search.svg": "465d39523d8810815523f5b8c4924c1f",
"assets/assets/icons/settings.svg": "951e11801e61ddecaba3150523314101",
"assets/assets/icons/share.svg": "6180e562e6059bc875f0c7fdf2bb7ee4",
"assets/assets/icons/show_participants.svg": "fea6dcc170297508ccee7a58b310258f",
"assets/assets/icons/timer.svg": "b0c2c6e137045a9404bb8f8645ee9d66",
"assets/assets/icons/trash_bin.svg": "30b37f8cb1f7238e69b0dbf2717b6b53",
"assets/assets/icons/unpin.svg": "dd2f9e6020a23db91a4e17f9beaf60c9",
"assets/assets/icons/user.svg": "d6721ea37f0fca6d122befb4f3c7f344",
"assets/assets/illustrations/landing.svg": "40fbfd905c4507ea1610ec554a264cfd",
"assets/assets/images/card_background.png": "bc652c4c2cdcc4670f14ebca2c4cbdb8",
"assets/assets/images/logo.png": "be0fd88e8cd50b1545855eba66338f25",
"assets/assets/images/logo_rounded.png": "e0b327ed2ecd3301119ea5bf2c812d29",
"assets/assets/lotties/complete.json": "299eb99f0a09ff6ad5e44fc4af8918cb",
"assets/FontManifest.json": "e28d812e7e48d71422c18138fee00ae2",
"assets/fonts/MaterialIcons-Regular.otf": "138ee93db86244ff386b7fc5776321f2",
"assets/NOTICES": "b3e7fa8c7a8de2ec1003a06c82d7517c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "c8b0d482e99abe1eae4dda9898cbca5f",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "0a901af03bb55986fd81405619d7f7e0",
"icons/Icon-512.png": "aab54e8137f48ae1a84bb602a789e04e",
"icons/Icon-maskable-192.png": "0a901af03bb55986fd81405619d7f7e0",
"icons/Icon-maskable-512.png": "aab54e8137f48ae1a84bb602a789e04e",
"index.html": "f7823b3f0a49908dea8021fc72f73c73",
"/": "f7823b3f0a49908dea8021fc72f73c73",
"main.dart.js": "b1ff85346ae04153774d31bc65e0e93b",
"manifest.json": "bf9e60ec65e8607ace56351afc6f04f6",
"splash/img/dark-1x.png": "651d79d12a1905acc35a8cdc80896b76",
"splash/img/dark-2x.png": "bceee10a4a63f675223383862ef29987",
"splash/img/dark-3x.png": "c49da29ae5bb8bf7a5c78d009805531b",
"splash/img/dark-4x.png": "d7cd25d98b7d050b69d532b9fb258297",
"splash/img/light-1x.png": "651d79d12a1905acc35a8cdc80896b76",
"splash/img/light-2x.png": "bceee10a4a63f675223383862ef29987",
"splash/img/light-3x.png": "c49da29ae5bb8bf7a5c78d009805531b",
"splash/img/light-4x.png": "d7cd25d98b7d050b69d532b9fb258297",
"version.json": "1a2d587346e949a27c196057e563c18d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
