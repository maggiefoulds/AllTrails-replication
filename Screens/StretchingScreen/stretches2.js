/**
 * Items
 * @type {{id:number, type:string, title:string, image:string}}
 */
const items = [
    {id:0, type:'splits', title:'Lunges', description: 'Place one leg in front and one leg behind you. Bend down and place your hands on the floor either side of your front foot, bending your front knee in to your chest. Slide your back leg backwards as far as possible. Push your hips down towards the floor.', image:'https://media1.popsugar-assets.com/files/thumbor/odplKLlrTQRqdmMXCQ2iZtzGdEg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/12/13/821/n/1922729/a2e8cfe891569e90_lunge/i/Runner-Lunge.jpg'},
    {id:1, type:'splits', title:'Pike fold', description: 'Sit on the floor with both legs straight out in front. Reach down with both hands towards your feet. Reach as far as you can, without bending your knees.', image:'https://i.pinimg.com/736x/be/0d/cb/be0dcbf6a5c08f1ae06c9d53e049e8fa.jpg'},
    {id:2, type:'splits', title:'Straddle fold', description: 'Sit on the floor with your legs out to either side, making a right angle. Keeping your knees straight and pointing towards the ceiling, fold your body at the hips to reach as far forward as possible. The aim is to get your belly button on the floor.', image:'https://ukflair.com/wp-content/uploads/2023/03/Amy-Straddle-300x225-1.jpeg'},
    {id:3, type:'splits', title:'Elbows down lunge', description: 'Get into a lunge shape, which your front leg bent, your back leg straight, and your hands on either side of your front foot. Lower your chest to your knee and place each elbow on the floor either side of your foot.', image:'https://i.dailymail.co.uk/i/pix/2016/09/14/18/38557A5100000578-3789528-image-a-63_1473875308344.jpg'},
    {id:4, type:'splits', title:'Pull back lunge', description: 'Kneel up on both knees. Place one leg straight in front of you, with your heel on the floor. Reach down to touch your front foot, getting your chest as low as possible towards your knee.', image:'https://i.pinimg.com/originals/ab/32/c0/ab32c0389a2fa43ff48a795e3aee15cb.jpg'},
    {id:5, type:'splits', title:'Butterfly', description: 'Sit on the floor with your legs wide. Bend your knees to bring your feet together in front of you, whilst keeping your knees out wide. Push your knees as low as possible to the floor, and bring your feet in close to your body.', image:'https://www.verywellfit.com/thmb/my_BC7_gxkQUcbo09KkppRP48bg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/87-3120294-ButterflyStretches0263-49db496667e54ab0b6528e7dee2d329c.jpg'},
    {id:6, type:'splits', title:'Hip flexor stretch', description: 'Sit in a tuck shape, and then twist your legs to fall onto the floor. Keep the bottom knee in place, and place the top leg bent behind you. Right angles should be created with both knees.', image:'https://www.nourishmovelove.com/wp-content/uploads/2022/01/untitled-29.jpg'},
    {id:7, type:'splits', title:'Pigeon pose', description: 'Place one leg infront on you on the floor, making a right angle at the knee. The other leg is placed straight behind you, with straight knees. Reach your body down towards the floor, over your front leg.', image:'https://www.ekhartyoga.com/media/images/articles/content/Pigeon-pose-Eka-Pada-Rajakapotasana-Ekhart-Yoga.jpg'},
    {id:8, type:'splits', title:'Oversplits', description: 'Place your front foot on a higher surface (e.g. table, step, cushion), and kneel on your back leg. Slowly slide your back leg out behind you, towards a split position. Push your hips as low as possible towards the floor, and reach forwards for a deeper stretch.', image:'https://live.staticflickr.com/2464/3921530501_b97d6df43f_b.jpg'},
    {id:9, type:'arms', title:'Arm circle', description: 'Stand up with both legs straight. Begin circling your arms backwards, with your elbows fully straight. Repeat but circle forwards instead. You can also attempt to circle your arms in opposite directions (i.e. one forwards and one backwards).', image:'https://s3assets.skimble.com/assets/2298314/image_iphone.jpg'},
    {id:10, type:'arms',title:'Tricep stretch', description: 'Bring one arm straight in front of you. Reach and hold the straight elbow with the opposite hand. Pull the straight arm towards your body, crossing over your chest.', image:'https://hips.hearstapps.com/hmg-prod/images/screen-shot-2022-12-20-at-2-12-43-pm-1671563581.png'},
    {id:11, type:'arms',title:'Chest opener', description: 'Standing up straight, clasp your hands together behind you. Lean your whole body forwards, whilst keeping your knees and elbows straight, and tip your arms over your head. Push your hands towards the floor as much as possible for a deeper stretch.', image:'https://kregweiss.files.wordpress.com/2012/06/standing-forward-bend-shoulder-opener1.jpg?w=980&h=1081&crop=1'},
    {id:12, type:'arms',title:'Overhead tricep stretch', description: 'Reach one arm straight up to the ceiling. Drop the hand down behind your head by bending at the elbow. Using the other hand, reach and grab your elbow, and pull it to the opposite side to deepen the stretch.', image:'https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2018/02/22104126/triceps-stretches-600-behind-head.jpg'},
    {id:13, type:'arms',title:'Shoulder stretch', description: 'Sit on the floor with your legs straight out in front of you. Place your hands on the floor behind you, with your fingers facing backwards. Slide your hands as far behind you as possible, whilst keeping your hands fairly close together. Look up to the ceiling for a deeper stretch.', image:'https://www.gymnasticbodies.com/fit/wp-content/uploads/2016/06/Christopher-Sommer-shoulder-extension.jpg'},
    {id:14, type:'arms',title:'Cat stretch', description: 'Kneel down so that you are sat on your feet. Place your hands on the floor in front of you, and slide them forwards. Press your shoulders into the floor and hips to the ceiling.', image:'https://tumblinghomework.com/wp-content/uploads/2017/11/cat-stretch.jpg'},
    {id:15, type:'arms',title:'Forearm stretch', description: 'Reach one arm straight in fornt of you. With the other hand, grab your hand and pull it towards your body. This can be done with the wrist pointing upwards or downwards.', image:'https://biofunctionalhealth.com/wp-content/uploads/2020/05/forearm-stretch.jpg'},
    {id:16, type:'arms',title:'Wrist circles', description: 'Place your hands and knees on the floor, so a right angle is made at both your hips and shoulders. With your hands facing in each direction (e.g. forwards, backwards, sideways, upside down), slowly and gently circle over your hands.', image:'https://images.squarespace-cdn.com/content/v1/5f5e8592d2b0854b18af6975/a675bf8f-f719-4f5a-b4f8-4f39d9ba6e90/quadruped+wrist+circles.jpg'},
    {id:17, type:'arms',title:'Back shoulders', description: 'Lift one arm up to the ceiling and then drop your hand behind your head. With the other hand reach up behind your back from underneath. Try to meet your hands in the missle behind your back, and link hands.', image:'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/324647_2200-800x1200.jpg'},
    {id:18, type:'back',title:'Seal stretch', description: 'Lie on your belly on the floor. Bend your elbows to place one hand flat on the floor under each shoulder. Push your arms straight, lifting your chest off the floor but keeping your legs and belly on the floor.', image:'https://tumblinghomework.com/wp-content/uploads/2017/11/seal-stretch.jpg'},
    {id:19, type:'back',title:'Rock and roll', description: 'Sit on the floor with your knees tucked into your chest. Hold onto your knees with both hands. Rock back and forth on your back in the tuck shape.', image:'https://i0.wp.com/farm1.static.flickr.com/158/363516975_009123c806.jpg'},
    {id:20, type:'back',title:'Bridge', description: 'Lie flat on you back. Tuck your knees in close to your body, whilst keeping your feet flat on the floor. Bend your elbows to place one hand flat under each shoulder. Push through your arms and legs as high as you can, aiming for both to be straight.', image:'https://www.fitstream.com/images/bodyweight-training/bodyweight-exercises/full-bridge.jpeg'},
    {id:21, type:'back',title:'Seal fold', description: 'Lie on your belly on the floor. Bring you hands under your shoulders and push up to a seal shape. Bend your knees and look backwards at the same time, aiming to touch your feet to your head.', image:'https://as1.ftcdn.net/v2/jpg/01/24/35/96/1000_F_124359659_szrguzoOIla1vBLkWfFDNol2D3f680zq.jpg'},
    {id:22, type:'back',title:'Elbow bridge', description: 'Lie flat on your back, then bend your arms and legs in towards your body, and place your hands and feet flat on the floor. Push up to a strong bridge shape. Lift up one arm at a time and place each elbow on the floor.', image:'https://www.liveabout.com/thmb/IurUbVIreSv1MdL0yqMargDhHj0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/DSC_0135-56a462f23df78cf7728224a0.jpg'},
    {id:23, type:'back',title:'Swan hold', description: 'Lie flat on your belly. Place your arms straight in front of you, and legs together behind you. Lift up your arms, legs, head and chest simultaneously to balance on your belly.', image:'https://clearviewchiropractic.net/wp-content/uploads/2018/08/arch-hold.jpg'},
    {id:24, type:'back',title:'Back kicks', description: 'Stand up straight beside on wall or bar. Gently place your hand on the wall or bar beside you. Kick your leg up as high as you can behind you. Try not to drop your chest down or put any weight in your balancing hand.', image:'https://www.wikihow.com/images/thumb/1/16/Stretch-Legs-for-High-Kicks-Step-7.jpg/v4-460px-Stretch-Legs-for-High-Kicks-Step-7.jpg'},
    {id:25, type:'back',title:'Spinal twist', description: 'Lie flat on your back and place your arms straight out to either side. Lift one leg in the air and form a right angle at your hips and at your knee. Twist so that the lifted knee crosses ove your body as rests on the floor beside you. Keep your back and arms on the floor throughout.', image:'https://i.ytimg.com/vi/BzYBkAvdCJY/maxresdefault.jpg'},
    {id:26, type:'back',title:'Teardrop bridge', description: 'Lie on your back and bend your knees and elbows closer to your body. Place your hands and feet flat on the floor and push up to a strong bridge shape. Walk your hands slowly towards your feet, aiming to reach and hold onto your ankles.', image:'https://64.media.tumblr.com/23dbce315b0bd6cc2e1fb99d80468c14/tumblr_nb1su0cMsS1rsgb77o1_640.jpg'},
];


/**
 * Get Stretch Data
 * @returns items in the array
 */
const getStretchData = () => {
    return items;
}

export default getStretchData;