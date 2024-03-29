import { faL, faLessThan } from "@fortawesome/free-solid-svg-icons"
import {v4 as uuid} from "uuid"
export const Products = [
    //Pants Men
    {
        id: uuid(),
        name: "Essential Relaxed-Fit Khaki Pants",
        description: "This easy-wearing pant features a classic look that shifts from weekday to weekend without missing a beat. Soft, breathable cotton twill with a gentle stretch",
        price: 60,
        gender: "mens",
        category: "bottoms",
        newArrival: false,
        image: "/images/MP1.png",
        onSale: true,
        trending: true,
    },
    {
        id: uuid(),
        name: 'Essential Outdoor Cargo Pants',
        description: 'These outdoor hiking pants are perfect for any outdoor indoor activities, camping, hiking, biking, fishing, jungle, running, backpacking, work, travel, rock climbing, skiing, snowboarding, also great for casual wear.',
        price: 70,
        gender: "mens",
        category: "bottoms",
        newArrival: false,
        image: "/images/MP2.png",
        onSale: true,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Essential Drawstring Shorts',
        description: 'Classic, non-stretch pull-on shorts for a versatile, warm weather wardrobe staple.',
        price: 50,
        gender: "mens",
        category: "bottoms",
        newArrival: false,
        image: "/images/MP3.png",
        onSale: false,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Japanese Sports Shorts',
        description: 'Casual Shorts For Workout, Running, Gym, Basketball, Cycling, Training, Beach, Fishing, Golf Or Home Wear.',
        price: 60,
        gender: "mens",
        category: "bottoms",
        newArrival: true,
        image: "/images/MP4.png",
        onSale: false,
        trending: true,
    },
    {
        id: uuid(),
        name: 'Essentail Joggers',
        description: 'These casual joggers are an everyday go-to. Lightweight fabric keeps you comfortable all year round.',
        price: 80,
        gender: "mensF",
        category: "bottoms",
        newArrival: false,
        image: "/images/MP5.png",
        onSale: false,
        trending: false,
    },
   
    //Shirts male
    {
        id: uuid(),
        name: 'Stripped Crewneck',
        description: 'high quality stretch Yarn Dye striped single jersey, middle weight 180g, NO worry about pilling and fading.',
        price: 45,
        gender: "mens",
        category: "shirts",
        newArrival: true,
        image: "/images/MS1.png",
        onSale: false,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Essential Leafy Button Down',
        description: 'Fits close to the body for fitted, slim silhouette. Soft, durable and cozy tumbled poplin for a lived-in feel right away',
        price: 65,
        gender: "mens",
        category: "shirts",
        newArrival: false,
        image: "/images/MS2.png",
        onSale: true,
        trending: true,
    },
    {
        id: uuid(),
        name: 'Essentail V Neck',
        description: 'Minimalist style. Suitable for leisure sports. A variety of color combinations create a modern and effortless fashion.',
        price: 50,
        gender: "mens",
        category: "shirts",
        newArrival: false,
        image: "/images/MS3.png",
        onSale: true,
        trending: false,
    },
    {
        id: uuid(),
        name: 'L.L. Cool J Graphic T',
        description: 'Wearing this Rock the Bells L.L. Cool J Mama Said Knock You Out Short Sleeved T-Shirt will definitely get you noticed. Enjoy the attention by simply wearing this short sleeve t-shirt day in and day out!',
        price: 60,
        gender: "mens",
        category: "shirts",
        newArrival: false,
        image: "/images/MS4.png",
        onSale: true,
        trending: false,
    },
    {
        id: uuid(),
        name: 'B.I.G Graphic T',
        description: 'Standout with The Notorious B.I.G graphic T-Shirt that is sure to get you noticed. Machine washable with no risk of fading.',
        price: 65,
        gender: "mens",
        category: "shirts",
        newArrival: false,
        image: "/images/MS5.png",
        onSale: true,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Floral Short Sleeve Button Down',
        description: 'Easy through chest and tapered through waist. Soft, durable and cozy tumbled poplin for a lived-in feel right away',
        price: 70,
        gender: "mens",
        category: "shirts",
        newArrival: true,
        image: "/images/MS6.png",
        onSale: false,
        trending: true,
    },
    {
        id: uuid(),
        name: 'Linen Cotton Button Down',
        description: 'Stylish and Modern Design is perfect all occasions especially casual outings, beach and summer activities and much more With every season in mind',
        price: 75,
        gender: "mens",
        category: "shirts",
        newArrival: true,
        image: "/images/MS7.png",
        onSale: false,
        trending: false,
    },
    //Sweaters/Hoodies male
    {
        id: uuid(),
        name: 'Essentail Crewneck Sweater',
        description: 'A go-to layering piece, this crewneck pullover sweater is lightweight enough to layer and soft enough to wear on its own. Featuring a classic cable pattern.',
        price: 75,
        gender: "mens",
        category: "sweaters",
        newArrival: false,
        image: "/images/MH1.png",
        onSale: true,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Essentail Cardigan Sweater',
        description: 'Upgrade your style with our V-neck cardigan old money sweater that boasts a unique and sophisticated design. With its retro-inspired button-down feature and solid color, this sweater exudes timeless elegance. Additionally, it is designed with two convenient pockets, adding functionality and practicality to your outfit. Stay on-trend with this versatile cardigan that suits any occasion.',
        price: 85,
        gender: "mens",
        category: "sweaters",
        newArrival: false,
        image: "/images/MH2.png",
        onSale: false,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Sleek Knitted Turtleneck',
        description: 'Fashion elegant long sleeve turtleneck slim fit sweaters great for all seasons, suits for Casual, Fashion, Work, Business, Streetwear, Dance, Parties, Night club, Skateboard, Urban style, etc.',
        price: 95,
        gender: "mens",
        category: "sweaters",
        newArrival: false,
        image: "/images/MH3.png",
        onSale: false,
        trending: true,
    },
    {
        id: uuid(),
        name: 'Essentail Fleece Hoodie',
        description: 'A classic everyday essential, this hooded sweatshirt is casual and comfortable. Throw it on for running errands or layer it with a collared shirt for a more dressed up look.',
        price: 80,
        gender: "mens",
        category: "sweaters",
        newArrival: false,
        image: "/images/MH4.png",
        onSale: true,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Fleece Patchwork Hoodie',
        description: 'The sweatshirt hoodies are lightweight,breathable and very comfortable to wear,made of soft durable and stretch fabric.',
        price: 105,
        gender: "mens",
        category: "sweaters",
        newArrival: true,
        image: "/images/MH5.png",
        onSale: false,
        trending: true,
    },
    {
        id: uuid(),
        name: 'Geometric Multicolor Hoodie',
        description: 'Get this stylish geometric hoodie with a unique design. Great for keeping warm and showing out.',
        price: 110,
        gender: "mens",
        category: "sweaters",
        newArrival: false,
        image: "/images/MH6.png",
        onSale: true,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Casual Pullover',
        description: 'This pullover hoodie sweatshirt features long sleeves, color block stylish style, two side pockets, soft warm fleece, drawstring hood and ribbed elastic hem and cuffs to lock in warmth, Contrast color make it looked very fashion.',
        price: 90,
        gender: "mens",
        category: "sweaters",
        newArrival: false,
        image: "/images/MH7.png",
        onSale: true,
        trending: false,
    },
    //Shoes male
    {
        id: uuid(),
        name: 'Essential Low Top Casual Sneakers',
        description: "Men's Casual Sneakers, You Can Wear Them To Walk, Go Shopping, Travel, Vacation, Parties, Parties, Etc., They Are Fashionable Men's Shoes For Any Occasion.",
        price: 90,
        gender: "mens",
        category: "shoes",
        newArrival: false,
        image: "/images/MF1.png",
        onSale: true,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Essentail Atheltic Sneakers',
        description: 'Moisture wicking mesh lining for maximum airflow and breathability to prevent foot odor. These work shoes are light and comfortable, keeping your feet comfortable even after a long day of work.',
        price: 110,
        gender: "mens",
        category: "shoes",
        newArrival: false,
        image: "/images/MF2.png",
        onSale: true,
        trending: true,
    },
    {
        id: uuid(),
        name: 'Fashionable Leather Sandles',
        description: 'Comfortable genuine leather, Lightweight, open toe. Rubber Sole: non-slip and wear-resistant, colour-resistant and flexible. Breathable, durable, comfortable .',
        price: 100,
        gender: "mens",
        category: "shoes",
        newArrival: true,
        image: "/images/MF3.png",
        onSale: false,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Stylish Casual Boots',
        description: 'Ultra-flexible and pliable design with a rounded heel, anatomical heel cup and arch for underfoot comfort, no-slip heel padding, UltimateFlex built-in flex grooves, and soft and light outsole',
        price: 130,
        gender: "mens",
        category: "shoes",
        newArrival: false,
        image: "/images/MF4.png",
        onSale: false,
        trending: false,
    },
    //Suits male
    {
        id: uuid(),
        name: 'Stylish 2 Piece Suit',
        description: "Suitable for weddings,prom,graduation ceremoney,dating, meeting, yacht party, banquet, formal event,business meetings, fashion shows, hosts' wearing, holiday, Christmas gift, grand holidays or just daily use.",
        price: 180,
        gender: "mens",
        category: "suits",
        newArrival: true,
        image: "/images/MSUIT1.png",
        onSale: false,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Fashionable Brown 3 Piece Tuxedo',
        description: 'Looking Peak Lapel 3 PC Regular Fit Tuxedos Suits Wedding Suits,Suitable for Wedding,Prom Party,Business,Interviews,Dinner,Graduation and Any Other Formal Occasions.Great Gifts for Relatives & Friends.',
        price: 155,
        gender: "mens",
        category: "suits",
        newArrival: false,
        image: "/images/MSUIT2.png",
        onSale: false,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Essential 3 Piece Buisiness Suit',
        description: 'This suit is suitable for many occasions, such as a wedding, daily life, a business meeting, fashion forward parties, holidays and more. It is also a great gift for a Dad, boyfriend, husband, and soon on.',
        price: 190,
        gender: "mens",
        category: "suits",
        newArrival: false,
        image: "/images/MSUIT3.png",
        onSale: true,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Pinstripe 2 Piece Suit',
        description: 'Prom suit for men slim fit 2 pieces suitable for Wedding Groomsmen, Party, Summer Beach, Prom, Daily Life, Business Meeting, Homecoming, Back to School, Holiday, Work Office, Dance, Interviews, Gala, Speech, Meets, Graduation, Birthday and other Formal Occasions. Good Gift Choice for your father, boyfriend husband or son. It can be matched with a blazer, shirt and tie to look formal and handsome. It can also be worn with solid color T-shirt to look casual.',
        price: 135,
        gender: "mens",
        category: "suits",
        newArrival: false,
        image: "/images/MSUIT4.png",
        onSale: false,
        trending: false,
    },




     //Pants female
     {
        id: uuid(),
        name: 'Baggy Waisted Trousers',
        description: 'Lavish waist high baggy bottoms made with 100% cotton for maximum comfort. Great for all occassions be it actively exercising or being fashionable at a party.',
        price: 90,
        gender: "womens",
        category: "bottoms",
        newArrival: true,
        image: "/images/FP1.png",
        onSale: false,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Essential Workout Sweatpants',
        description: 'womens yoga sweatpants have two side pockets for easy storage of your essentials to free your hands, perfect blend of functional and stylish. high waisted sweatpants for women with adjustable elastic waistband to flexiblely fit different waist circumferences. wide leg and loose straight design will make you comfortable and offers the sweatpants great mobility when you are doing exercise.',
        price: 75,
        gender: "womens",
        category: "bottoms",
        newArrival: false,
        image: "/images/FP2.png",
        onSale: true,
        trending: false,
    },
    {
        id: uuid(),
        name: 'High Waist Cargo Pants',
        description: "Women's cargo pants made from a blend of lightweight, stretchable fabric that offers maximum durability and comfort. Featuring plenty of storage pockets, including two large front pockets and two side cargo-style pockets.",
        price: 80,
        gender: "womens",
        category: "bottoms",
        newArrival: false,
        image: "/images/FP3.png",
        onSale: false,
        trending: true,
    },    
    {
        id: uuid(),
        name: 'Essential Athletic Shorts',
        description: 'Comfy running sweat shorts feature a high waist adjustable drawstring,Shorts for Women,Pure Color,Loose Fit,fit in home and outdoor.Side Pockets for easy storage of your belongings.',
        price: 65,
        gender: "womens",
        category: "bottoms",
        newArrival: false,
        image: "/images/FP4.png",
        onSale: true,
        trending: true,
    },    
    {
        id: uuid(),
        name: 'Stretchy Fit Denim',
        description: 'Super-stretch, soft, lightweight, and breathable fabrics have been carefully selected to make you feel comfortable in any position, whether sitting or squatting.',
        price: 95,
        gender: "womens",
        category: "bottoms",
        newArrival: true,
        image: "/images/FP5.png",
        onSale: false,
        trending: false,
    },    
    //Shirts female
    {
        id: uuid(),
        name: 'Cable Knit Turtleneck',
        description: 'Casual and lovely, this top features Turtleneck , long sleeves with ribbed knit. The slim-fit style and stretchy fabric that perfect to show your body shape',
        price: 80,
        gender: "womens",
        category: "shirts",
        newArrival: true,
        image: "/images/FS1.png",
        onSale: true,
        trending: true,
    },
    {
        id: uuid(),
        name: 'Rounded V Tee',
        description: 'Scoop Neckline,Simple and Feminine Summer Top,Modified Face Shape,Revealing Sexy Collarbone.',
        price: 70,
        gender: "womens",
        category: "shirts",
        newArrival: true,
        image: "/images/FS2.png",
        onSale: false,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Long Sleeve T-Shirt',
        description: 'This basic shirt is a must-have for spring,summer,fall and winter, perfect wear with cargo pants,shorts,',
        price: 65,
        gender: "womens",
        category: "shirts",
        newArrival: false,
        image: "/images/FS3.png",
        onSale: true,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Long Sleeve Crop Top',
        description: 'Women fitted basic tee shirt are suitable for daily wear, clubwear, nightclub, cocktail party, go on vacation, dating, friends party, photography outfit and so on.',
        price: 70,
        gender: "womens",
        category: "shirts",
        newArrival: false,
        image: "/images/FS4.png",
        onSale: true,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Slim Fit Crop Top',
        description: 'A trendy backless crewneck crop top perfect for going out and being the life of the party.',
        price: 60,
        gender: "womens",
        category: "shirts",
        newArrival: true,
        image: "/images/FS5.png",
        onSale: false,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Striped Crew T-shirt',
        description: 'Casual striped print t shirt, round neck, short sleeve, regular fit, classic t shirt design for everyday wear, breathable and comfortable, a good choice for leisure and daily life',
        price: 50,
        gender: "womens",
        category: "shirts",
        newArrival: false,
        image: "/images/FS6.png",
        onSale: false,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Striped Crew T-Shirt',
        description: 'Relaxed fitting casual striped t-shirt good for any occassion.',
        price: 45,
        gender: "womens",
        category: "shirts",
        newArrival: false,
        image: "/images/FS7.png",
        onSale: false,
        trending: false,
    },
    //Sweaters/Hoodies female
    {
        id: uuid(),
        name: 'Cable Knit Turtleneck',
        description: 'Casual and lovely, this top features Turtleneck , long sleeves with ribbed knit. The slim-fit style and stretchy fabric that perfect to show your body shape',
        price: 80,
        gender: "womens",
        category: "sweaters",
        newArrival: true,
        image: "/images/FH1.png",
        onSale: false,
        trending: true,
    },
    {
        id: uuid(),
        name: 'Knitted Pullover',
        description: 'Breathable sweater perfect for all seasons and occassions. Comfortable and flexible loose fitting to suit all body types.',
        price: 85,
        gender: "womens",
        category: "sweaters",
        newArrival: true,
        image: "/images/FH2.png",
        onSale: true,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Loose Lapel Autumn Sweater',
        description: 'Casual Type Coat Which Will Be Utility For Womens And Ladies Daily Wearing, It Can Help You Avoid Many Unbecoming Wearing Troubles. The Winter Coat Is Easily Wear And Universally Applicable, Perfect With Your Favorite Shorts, Leggings, Black , Denim Jeans, Etc. You Can Wear It To Different Occasions For Several Purposes.',
        price: 75,
        gender: "womens",
        category: "sweaters",
        newArrival: false,
        image: "/images/FH3.png",
        onSale: true,
        trending: true,
    },
    {
        id: uuid(),
        name: 'Crew Neck Ruffle Knit Sweater',
        description: 'The Long Sleeve Pullover Enchants With Its Elaborate Details. The Crew Neck , Which Create a Casual And Chic Vibe. A Classic With An Eye-Catching Effect: The Trendy Sweater With Solid Color Impresses With Its Ruffle Details And Buttons At The Top. The Attractive V Neckline or Vintage Round Neck can be shown by unbuckle or button up. The Long Sleeves With Knitted Ruffles Cuff Are Particularly Flattering. This Sweater Is a Timeless And Ideal Companion In Chilly Days',
        price: 90,
        gender: "womens",
        category: "sweaters",
        newArrival: true,
        image: "/images/FH4.png",
        onSale: false,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Fluffy Sherpa Hoodie',
        description: `Oversized Sweatshirts for Women is designed for fashionable and comfortable wearing, and suitable for most people. Oversized loose style of women's hoodies pullover will keep you in a stylish look when jogging, walking and shopping.`,
        price: 95,
        gender: "womens",
        category: "sweaters",
        newArrival: false,
        image: "/images/FH5.png",
        onSale: false,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Essential Fleece Hoodie',
        description: 'This fall hoodies is easy to pair with casual pants, jeans, joggers, shorts, sneaker, casual shoes to creating a fashion and pretty looking in spring, autumn and winter. You can also match anything you like inside, like tank top, crop top, vest, etc.',
        price: 70,
        gender: "womens",
        category: "sweaters",
        newArrival: false,
        image: "/images/FH6.png",
        onSale: true,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Loose Zip Up Jacket',
        description: 'Ladies long sleeve tops, this loose t-shirt/top/pillover/coat shows just the right amount of skin without going overboard. Womens fall winter tops vintage print/solid color graphic blouse,soft fabric for comfort, fashion classic design.Rayon tops, stretchy fabric, lightweight, soft, skin-friendly and breathable, provide a more comfortable wearing experience. It is perfect for all seasons.',
        price: 80,
        gender: "womens",
        category: "sweaters",
        newArrival: true,
        image: "/images/FH7.png",
        onSale: false,
        trending: false,
    },
    //Shoes female
    {
        id: uuid(),
        name: 'Suede Comfort Loafers',
        description: 'Comfortable suede loafers for when you want to take it easy. Perfect for wearing around the house or for going on a relaxing walk.',
        price: 50,
        gender: "womens",
        category: "shoes",
        newArrival: false,
        image: "/images/FF4.png",
        onSale: false,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Lightweight Running Shoes',
        description: 'The inside is breathable and not stuffy, and the feet are still dry and odor-free after wearing it all day. The outer skin is soft and tough and there is no trace of bending and folding many times, and it can still restore its original appearance. durable and wear-resistant.',
        price: 100,
        gender: "womens",
        category: "shoes",
        newArrival: false,
        image: "/images/FF3.png",
        onSale: true,
        trending: true,
    },
    {
        id: uuid(),
        name: 'Essential High Heels',
        description: 'This comfortable pumps shoes are crafted with a feminine pointed toe and finished with a sexy and wearable block heel. Complement the fashion shape with weighty culottes and voluminous mini skirts.',
        price: 120,
        gender: "womens",
        category: "shoes",
        newArrival: false,
        image: "/images/FF2.png",
        onSale: true,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Slip-on Sneakers',
        description: `PU outsole for excellent softness, slip-resistance and shock-absorption, can relieve feet's stress and pain for comfortable experience`,
        price: 75,
        gender: "womens",
        category: "shoes",
        newArrival: true,
        image: "/images/FF1.png",
        onSale: false,
        trending: false,
    },
    //Dress female
    {
        id: uuid(),
        name: 'Casual Button Down Dress',
        description: 'This is casual dresses for women summer. Both sides have nice pockets are great for carry your phone or useful items. Flattering gathers at elastic waist features add some pizzazz and give the dress personality. It hides you imperfections just right, hides tummy well. Very flattering on the body.',
        price: 120,
        gender: "womens",
        category: "dresses",
        newArrival: true,
        image: "/images/FDRESS4.png",
        onSale: false,
        trending: true,
    },
    {
        id: uuid(),
        name: 'Formal Ball Dress',
        description: 'Off the shoulder cocktail dress for all your special occassions ranging from parties, to weddings, to photoshoots.',
        price: 90,
        gender: "womens",
        category: "dresses",
        newArrival: false,
        image: "/images/FDRESS3.png",
        onSale: true,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Essential One Shoulder Dress',
        description: 'This pleated maxi dress for women elegant has one-shoulder, hollowed design on the waist, simple solid color or flower printed pattern, irregular hem, pleated design makes you more fashionable.',
        price: 140,
        gender: "womens",
        category: "dresses",
        newArrival: false,
        image: "/images/FDRESS2.png",
        onSale: true,
        trending: false,
    },
    {
        id: uuid(),
        name: 'Flared Cocktail Party Dress',
        description: 'Vintage and Elegant Style,Fit and Flare Casual Dress;Perfect for Spring,Summer,and Fall.',
        price: 100,
        gender: "womens",
        category: "dresses",
        newArrival: true,
        image: "/images/FDRESS1.png",
        onSale: false,
        trending: false,
    },
]