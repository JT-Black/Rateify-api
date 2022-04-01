import Artist from '../models/artist.js';

function createArtist(name, bio, img) {
  return {
    name: name,
    bio: bio,
    img: img
  };
}
function createRelease(title, url, artwork, releaseYear, genre) {
  return {
    title: title,
    url: url,
    artwork: artwork,
    releaseYear: releaseYear,
    genres: [genre],
    artist: ''
  };
}
const artists = [
  createArtist(
    'Alter Bridge',
    'Alter Bridge is an American rock band from Orlando, Florida. The band was formed in 2004 by vocalist/rhythm guitarist Myles Kennedy, lead guitarist Mark Tremonti, bassist Brian Marshall and drummer Scott Phillips. After their former band Creed became inactive in 2003, Tremonti and Phillips formed a new band with former bandmate Marshall and new member Kennedy.',
    'https://metalblare.com/wp-content/uploads/2020/11/Alter-Bridge.jpg'
  ),
  createArtist(
    'Black Sabbath',
    'Black Sabbath were an English rock band formed in Birmingham in 1968 by guitarist Tony Iommi, drummer Bill Ward, bassist Geezer Butler and vocalist Ozzy Osbourne. Black Sabbath have sold over 70 million records worldwide as of 2013, making them one of the most commercially successful heavy metal bands. They were ranked by MTV as the ""Greatest Metal Band"" of all time, and placed second in the VH1 ""100 Greatest Artists of Hard Rock"" list. Black Sabbath were inducted into the UK Music Hall of Fame in 2005 and the Rock and Roll Hall of Fame in 2006. ',
    'https://upload.wikimedia.org/wikipedia/commons/4/42/Sabs.jpg'
  ),
  createArtist(
    'Beyoncé',
    'Beyoncé rose to fame in the late 1990s as the lead singer of Destinys Child, one of the best-selling girl groups of all time. She is one of the best-selling recording artists in the world, having sold 120 million records worldwide and the first solo artist to have their first six studio albums debut at number one on the Billboard 200.',
    'https://media.vogue.co.uk/photos/5f9edcdc8d0380c32d95b0bb/4:3/w_1871,h_1403,c_limit/Beyonce%201%20copilot.jpg'
  ),
  createArtist(
    'Bring Me The Horizon',
    'Bring Me the Horizon (often abbreviated as BMTH) are a British rock band formed in Sheffield in 2004. The group consists of lead vocalist Oliver Sykes, guitarist Lee Malia, bassist Matt Kean, drummer Matt Nicholls and keyboardist Jordan Fish. The style of their early work, including their debut album Count Your Blessings, has been described primarily as deathcore, but they started to adopt a more eclectic style of metalcore on later albums.',
    'https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2019/10/Bring-Me-The-Horizon-106704317_10158562352883658_3073533131932989849_o.jpg'
  ),
  createArtist(
    'The Streets',
    'The Streets are an English rap music project led by vocalist and multi-instrumentalist Mike Skinner. ',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/The_Streets_John_Peel_Stage_Glastonbury_2019_013.jpg/1200px-The_Streets_John_Peel_Stage_Glastonbury_2019_013.jpg'
  ),
  createArtist(
    'Avicii',
    'Tim Bergling (8 September 1989 – 20 April 2018), known professionally as Avicii, was a Swedish DJ, remixer, record producer, musician and songwriter. At the age of 16, Bergling began posting his remixes on electronic music forums, which led to his first record deal. Bergling retired from touring in 2016, having suffered from stress and poor mental health for several years. On 20 April 2018, he committed suicide while on holiday in Muscat, Oman. In 2019, his third and final album, Tim, was released posthumously.',
    'https://www.edmtunes.com/wp-content/uploads/2021/09/Avicii-Documentary-.jpeg'
  ),
  createArtist(
    'Coheed & Cambria',
    'Coheed and Cambria is an American progressive rock band from Nyack, New York, formed in 1995. The band consists of Claudio Sanchez (vocals, guitars, keyboards), Travis Stever (guitars, vocals), Josh Eppard (drums, keyboards, backing vocals), and Zach Cooper (bass, backing vocals). Their music incorporates aspects of progressive rock, pop, heavy metal, and post-hardcore.',
    'https://roundhouse-assets.s3.amazonaws.com/assets/Image/15536-fitandcrop-1200x681.jpg'
  ),
  createArtist(
    'Dragonforce',
    'DragonForce are a British power metal band from London, England. The band was formed in 1999 by guitarists Herman Li and Sam Totman, and are known for their long and fast guitar solos, fantasy-themed lyrics and retro video game-influenced sound. Their current lineup comprises Li, Totman, vocalist Marc Hudson, drummer Gee Anzalone and bassist Alicia Vigil.',
    'https://cms.kerrang.com/images/DRAGONFORCE-EXTREME-POWER-METAL.jpg'
  ),
  createArtist(
    'Elvis Costello',
    'Declan Patrick MacManus OBE (born 25 August 1954), known professionally as Elvis Costello, is an English singer-songwriter and record producer. He has won multiple awards in his career, including Grammy Awards in 1999 and 2020, and has twice been nominated for the Brit Award for Best British Male Artist. In 2003, he was inducted into the Rock and Roll Hall of Fame. In 2004, Rolling Stone ranked Costello number 80 on its list of the 100 Greatest Artists of All Time.',
    'https://compote.slate.com/images/ad9ae654-e07c-4013-b71c-cd3855b4d57c.jpg?width=1600'
  ),
  createArtist(
    'Drake',
    'Aubrey Drake Graham (born October 24, 1986) is a Canadian rapper, singer, songwriter and actor. Gaining recognition by starring as Jimmy Brooks in the CTV teen drama series Degrassi: The Next Generation (2001–08), Drake pursued a career in music releasing his debut mixtape Room for Improvement in 2006; he subsequently released the mixtapes Comeback Season (2007) and So Far Gone (2009) before signing with Young Money Entertainment. With over 170 million records sold, Drake is ranked as the highest-certified digital singles artist in the United States by the RIAA. He has won four Grammy Awards, six American Music Awards, a record 29 Billboard Music Awards, two Brit Awards, and three Juno Awards, and holds several Billboard Hot 100 chart records.',
    'https://www.billboard.com/wp-content/uploads/2021/09/05-drake-press-2021-billboard-1548-1630682751.jpg'
  ),
  createArtist(
    'Eminem',
    'Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem, is an American rapper, songwriter, and record producer. Eminem is among the best-selling music artists of all time, with estimated worldwide sales of over 220 million records. He is credited with popularizing hip hop in middle America and is critically acclaimed as one of the greatest rappers of all time. The global success of Eminem is widely regarded as having broken racial barriers for the acceptance of white rappers in popular music. While much of his transgressive work during the late 1990s and early 2000s made him widely controversial, he came to be a representation of popular angst of the American underclass, and has been cited as an influence for many artists of various genres.',
    'https://www.billboard.com/wp-content/uploads/2020/04/eminem-press-photo-2019-aqu-billboard-1548-1587659998.jpg'
  ),
  createArtist(
    'Gorillaz',
    'Gorillaz are an English virtual band formed in 1998 by musician Damon Albarn and artist Jamie Hewlett, from London, England. The band primarily consists of four animated members: 2-D (vocals, keyboards), Murdoc Niccals (bass guitar), Noodle (guitar, keyboards, vocals), and Russel Hobbs (drums). Their fictional universe is presented in music videos, interviews and short cartoons. The band have sold over 25 million records worldwide and are cited by Guinness World Records as the ""Most Successful Virtual Band"" ever. They have won a Grammy Award, two MTV Video Music Awards, an NME Award and three MTV Europe Music Awards. They have also been nominated for 11 Brit Awards and won Best British Group at the 2018 Brit Awards.',
    'https://www.rollingstone.com/wp-content/uploads/2018/07/gorillaz-new-music-7181a5a4-ecd3-43f9-975e-493a7d2f6d5f.jpg?resize=1800,1200&w=1200'
  ),
  createArtist(
    'Faith No More',
    'Faith No More is an American rock band from San Francisco, California, formed in 1979. The current lineup of Faith No More consists of Gould, Bordin, Bottum, lead guitarist Jon Hudson, and vocalist/lyricist Mike Patton. Faith No More officially announced its breakup on April 20, 1998. The band has since reunited, conducting The Second Coming Tour between 2009 and 2010, and releasing its seventh studio album, Sol Invictus. After the touring cycle of Sol Invictus, Faith No More went on hiatus once again. In November 2019, the band announced that it would reunite to embark on a 2020 UK and European tour, but due to the COVID-19 pandemic, this was postponed. Touring was due to recommence with a brief US tour in September 2021, followed by the previously postponed UK and Europe dates in June 2022, but all tour dates were cancelled with Patton citing mental health reasons.',
    'https://www.billboard.com/wp-content/uploads/media/faith-no-more-portrait-1990-billboard-1548.jpg'
  ),
  createArtist(
    'Ghost',
    'Ghost, (also formerly known as Ghost B.C. in the United States), is a Swedish rock band that was formed in Linköping in 2006. The song ""Ritual"" was chosen by Kerrang! as one of ""The 50 Most Evil Songs Ever."" Their second album and major label debut, Infestissumam, was released in 2013, debuted at number one in Sweden, and won the Grammis Award for Best Hard Rock/Metal Album. The band released their third studio album, Meliora, in 2015 to much critical acclaim and high record sales, reaching number one in their home country of Sweden, and number eight in the United States. Its lead single, ""Cirice"", earned them the 2016 Grammy Award for Best Metal Performance. Ghost is easily recognizable owing greatly to its eccentric on-stage presence. Seven of the eight members of the group, wear virtually identical, face-concealing costumes while lead singer Tobias Forge obscures his identity behind a prosthetic mask, makeup and multi-coloured contact lenses. He also wears Cardinal vestments (or sometimes a black or white tuxedo) and the theatrical ensemble can be best described as a ""demonic anti-pope"".',
    'https://cdn.mos.cms.futurecdn.net/qYZcgNZJDzL6JTPmfLaKn9-1024-80.jpg.webp'
  ),
  createArtist(
    'Chase and Status',
    'Chase & Status are an English electronic music duo composed of Saul Milton (Chase) and Will Kennard (Status). In addition, Andy Gangadeen is the drummer when the band performs live. MC Rage formerly assisted the group when they perform, but left in July 2021 to focus on solo ventures. The duo are from London, and formed in 2003 after meeting at university in Manchester. The duo have since released five studio albums as well as collaborating with major artists such as Plan B, CeeLo Green, Rihanna, Example, and Tinie Tempah. They run the independent record label MTA Records.',
    'https://d23sy9fe9womrt.cloudfront.net/3/53703_1_chase-status-leeds-show-delivered-by-detonate_ban.jpg'
  ),
  createArtist(
    'Code Orange',
    'Code Orange (formerly known as Code Orange Kids) is an American hardcore punk band that formed in Pittsburgh, Pennsylvania in 2008. The band consists of guitarist, keyboardist and vocalist Eric Balderose, guitarist and vocalist Reba Meyers, drummer and vocalist Jami Morgan, bassist Joe Goldman, and guitarist Dominic Landolina. Code Orange started as a hardcore punk band and started to shift to metalcore on the release of their debut album Love Is Love/Return to Dust. Their later albums, such as Forever and Underneath, incorporated elements of grunge, electronica and industrial. They have received one Kerrang! Award for Best International Breakthrough and have been nominated for two Grammy Awards for Best Metal Performance. ',
    'https://www.billboard.com/wp-content/uploads/2020/03/Code-Orange-press-by-Tim-Saccenti-2020-billboard-1548-1584040264.jpg'
  ),
  createArtist(
    'Haken',
    'Haken are an English progressive metal band formed in 2007 by multi-instrumentalist Richard Henshall, guitarist Matthew Marshall, and vocalist Ross Jennings. As of 2020, they have released six studio albums, an EP, and two live albums.',
    'https://hakenmusic.com/wp-content/uploads/2020/03/MAX_TAYLOR_GRANT_2019-12-09_UK_Haken-PR_3587-Edit.jpg'
  ),
  createArtist(
    'Iron Maiden',
    'Iron Maiden are an English heavy metal band formed in Leyton, East London, in 1975 by bassist and primary songwriter Steve Harris. Their discography has grown to 41 albums, including 17 studio albums, 13 live albums, four EPs, and seven compilations. They have also released 47 singles and 20 video albums. Two electronic games have been released with Iron Maiden soundtracks, and their music is featured in a number of other video games.As pioneers of the new wave of British heavy metal movement, Iron Maiden achieved initial success during the early 1980s. After several line-up changes, the band went on to release a series of UK and US platinum and gold albums. As of 2021, Iron Maiden have have sold over 200 million copies of their releases worldwide, including albums, singles, compilations, and video releases. Lyrically Iron Maiden cover such topics as history, literature, war, mythology, society and religion. Many of their songs are based on history, classic literature and film.',
    'https://www.graspop.be/imagecache/generated/g/gmm-2020-iron-maiden-jm8rxpdzcjrywvy-1.jpg/module/bands/detail/crops/gmm-2020-iron-maiden-jm8rxpdzcjrywvy-1.jpg/gmm-2020-iron-maiden-jm8rxpdzcjrywvy-1.jpg'
  ),
  createArtist(
    'The Jackson 5',
    'The Jackson 5 are an American pop band composed of members of the Jackson family. The group was founded in 1964 in Gary, Indiana, by Joe Jackson, as well as by brothers Jackie, Tito, and Jermaine, with younger brothers Marlon and Michael joining soon after. According to some sources, The Jackson 5 have sold more than 100 million records worldwide. In 1980, the brothers were honored with a star on the Hollywood Walk of Fame as the Jacksons. They were inducted to the Rock and Roll Hall of Fame in 1997. The recordings (""ABC"" and ""I Want You Back"") are among the Rock and Roll Hall of Fame 500 Songs that Shaped Rock and Roll and were also inducted into the Grammy Hall of Fame.',
    'https://lastfm.freetls.fastly.net/i/u/ar0/52d91670edc8f74b6216f0e81a4eb034.jpg'
  ),
  createArtist(
    'Killswitch Engage',
    'Killswitch Engage is an American metalcore band from Westfield, Massachusetts, formed in 1999 after the disbanding of Overcast and Aftershock. The band has released eight studio albums and two live performance albums. The band has sold over four million records in the U.S. and has been considered notable within the New Wave of American Heavy Metal. Like some 2000s metalcore bands, Killswitch Engage vocally combine singing, screaming vocals, and growls in their music. In 2009, MTV, while naming ""The Greatest Metal Bands of All Time"", said that Killswitch Engage have been ""called one of the founders of metalcore"".',
    'https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2019/12/mfn-killswitchengage.jpg'
  ),
  createArtist(
    'Lil Nas X',
    'Montero Lamar Hill (born April 9, 1999), known by his stage name Lil Nas X, is an American rapper and singer. He rose to prominence with the release of his country rap single ""Old Town Road"", which first achieved viral popularity in early 2019 before climbing music charts internationally and becoming diamond certified by November of that same year. Lil Nas X was the most-nominated male artist at the 62nd Annual Grammy Awards, where he ultimately won awards for Best Music Video and Best Pop Duo/Group Performance. ""Old Town Road"" earned him two MTV Video Music Awards including Song of the Year, and the American Music Award for Favorite Rap/Hip Hop Song; Lil Nas X is also the first openly LGBT Black artist to win a Country Music Association award. Time named him as one of the 25 most influential people on the Internet in 2019, and he was named on the Forbes 30 Under 30 list in 2020.',
    'https://cssh.northeastern.edu/wp-content/uploads/2021/09/lil-nas-x-met-gala.jpeg'
  ),
  createArtist(
    'Mastodon',
    'Mastodon is an American heavy metal band from Atlanta, Georgia, formed in 2000. The group is composed of Troy Sanders (bass/vocals), Brent Hinds (lead guitar/vocals), Bill Kelliher (rhythm guitar/backing vocals), and Brann Dailor (drums/vocals). Mastodon has released eight studio albums, as well as a number of other releases. The ""sludge/stoner/alternative metal outfit"" Mastodon, as labelled by AllMusic, is ""one of the preeminent metal acts of the early 21st century"". Rolling Stone stated: ""Mastodon are a bunch of doom-haunted, myth-obsessed, meat-and-potatoes Southern badasses who have become the most important new band in metal.""',
    'https://media.redbullmusicacademy.com/assets/photo-credit-jimmy-hubbard-extralarge_1486148515974.0292282d.jpg'
  ),
  createArtist(
    'Metallica',
    'Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich. The fast tempos, instrumentals and aggressive musicianship made them one of the founding ""big four"" bands of thrash metal, alongside Megadeth, Anthrax and Slayer. Their current lineup comprises founding members and primary songwriters Hetfield and Ulrich, longtime lead guitarist Kirk Hammett and bassist Robert Trujillo. Metallica has released ten studio albums, four live albums, twelve video albums, a cover album, two extended plays, 37 singles and 39 music videos. The band has won nine Grammy Awards from 23 nominations, and its last six studio albums have consecutively debuted at number one on the Billboard 200. Metallica ranks as one of the most commercially successful bands of all time, having sold over 125 million albums worldwide as of 2018.',
    'https://m.media-amazon.com/images/M/MV5BZTNmNThlNzUtMTFkMS00ZTk3LWEyNjQtNGUyZWM1OGJhNjQzXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg'
  ),
  createArtist(
    'Slipknot',
    'Slipknot is an American heavy metal band formed in Des Moines, Iowa, in 1995 by percussionist Shawn Crahan, drummer Joey Jordison and bassist Paul Gray. Slipknot is well known for its attention-grabbing image, aggressive style of music, and energetic and chaotic live shows. The band has sold 30 million records worldwide. Their sound typically features a heavily down-tuned guitar setup, a large percussive section, sampling, keyboards and DJing/turntablism.',
    'https://dynamicmedia.livenationinternational.com/Media/v/b/q/a3e04fcb-b8ae-4ef1-8d7e-547f231e91ca.jpg'
  ),
  createArtist(
    'Snoop Dogg',
    'Calvin Cordozar Broadus Jr. (born October 20, 1971), known professionally as Snoop Dogg (previously Snoop Doggy Dogg and briefly Snoop Lion), is an American rapper, songwriter, media personality, actor, and entrepreneur. His fame dates to 1992 when he featured on the Dr. Dre debut solo single, ""Deep Cover"", and then on the Dr. Dre debut solo album, The Chronic. Broadus has since sold over 23 million albums in the United States and 35 million albums worldwide.',
    'https://media.gq.com/photos/620456ff6d4b6c578270864d/16:9/w_2560%2Cc_limit/1354586467'
  ),
  createArtist(
    'Royal Blood',
    'Royal Blood are an English rock duo formed by Mike Kerr (vocals, bass guitar) and Ben Thatcher (drums) in Worthing in 2011. Their unique sound is anchored by their bass playing style, which sees Kerr using various effects pedals and amps to make his bass guitar sound like a standard electric guitar and bass guitar at the same time.',
    'https://media.resources.festicket.com/www/artists/RoyalBlood.jpg'
  ),
  createArtist(
    'JAY-Z',
    'Shawn Corey Carter (born December 4, 1969), known professionally as Jay-Z, is an American rapper, songwriter, record executive, entrepreneur, and media proprietor. He is regarded as one of the most influential hip-hop artists in history. Well-known for his role as the former CEO of Def Jam Recordings, he has been central to the creative and commercial success of artists including Kanye West, Rihanna, and J. Cole. A billionaire, Jay-Z has attained significant success and media attention for his career as a businessman. Jay-Z is one of the best-selling music artists, with over 125 million records sold and he has won 23 Grammy Awards, the most by a rapper, and holds the record for the most number-one albums by a solo artist on the Billboard 200 (14). Additionally, he is ranked by Billboard and Rolling Stone as one of the 100 Greatest Artists of All Time, Jay-Z was the first rapper honored in the Songwriters Hall of Fame, and the first solo living rapper inducted in the Rock and Roll Hall of Fame.',
    'https://www.rollingstone.com/wp-content/uploads/2018/06/jay-z-track-by-track-2017-52eb3f11-ec2f-4f7d-ada5-2bbe811a26b2.jpg'
  ),
  createArtist(
    'Kanye West',
    'Kanye West is an American rapper, record producer, and fashion designer. Born in Atlanta and raised in Chicago, West gained recognition as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several artists and developing the ""chipmunk soul"" sampling style. He is widely regarded as one of the greatest and most influential hip-hop musicians of all time, as well as one of the most critically acclaimed artists of his generation. Kany West is one of the best-selling music artists in the world, with over 160 million records sold. West has won 22 Grammy Awards, the joint tenth-most of all time and he is frequently lauded as one of the greatest artists in hip-hop, with his music among the most acclaimed. Rolling Stone included six of his albums on the 2020 500 Greatest Albums of All Time list with the same publication naming him one of the 100 Greatest Songwriters of All Time. Forbes estimates his net worth at $1.8 billion as of 2021.',
    'https://ichef.bbci.co.uk/news/976/cpsprodpb/0C47/production/_121134130_ye_getty.jpg'
  ),
  createArtist(
    'Nicki Minaj',
    'Onika Tanya Maraj-Petty (born December 8, 1982), known professionally as Nicki Minaj, is a Trinidadian-born rapper, singer, songwriter and actress. She is noted for her versatility as an artist, her lyricism and animated flow in her rapping and her usage of alter egos and accents. She became the first female artist to have one hundred Billboard Hot 100 entries and currently has twenty U.S. top ten singles, which is the most for any female rapper. Cited as the latest ""Queen of Rap"" and the ""Queen of Hip Hop"" by several media outlets, Minaj is also one of the best-selling music artists, with 100 million records sold worldwide. ',
    'https://media.allure.com/photos/5fbbd6e1fa7ff608d58a2d4d/master/pass/nicki%20minaj.jpg'
  ),
  createArtist(
    'Dua Lipa',
    'Dua Lipa (born 22 August 1995) is an English singer and songwriter. After working as a model, she signed with Warner Bros. Records in 2014 and released her eponymous debut album in 2017. The album peaked at number three on the UK Albums Chart and yielded eight singles, including ""Be the One"", ""IDGAF"", and the UK number-one single ""New Rules"", which also peaked at number six in the US. The album has been certified platinum in numerous countries worldwide and won Lipa the Brit Awards for British Female Solo Artist and British Breakthrough Act in 2018. Her lastest album Future Nostalgia received critical acclaim and earned six Grammy nominations—including Album of the Year, Record of the Year and Song of the Year—and became her first UK number-one album. The album helped Lipa win British Female Solo Artist and British Album of the Year at the 2021 Brit Awards.',
    'https://static.onecms.io/wp-content/uploads/sites/20/2021/07/08/dua-lipa.jpg'
  ),
  createArtist(
    'Adele',
    'Adele Laurie Blue Adkins MBE (born 5 May 1988) is an English singer and songwriter. Adele is one of the best-selling music artists in the world, with sales of over 120 million records. Her debut album, 19, was released in 2008 and spawned the UK top-five singles. The album was certified 8× platinum in the UK and triple platinum in the US. Adele released her second studio album, 21, in 2011. It became the best-selling album of the 21st century, with sales of over 31 million copies. It was certified 17× platinum in the UK (the highest by a solo artist of all time) and Diamond in the US. According to Billboard, 21 is the top-performing album in the US chart history, topping the Billboard 200 for 24 weeks (the longest for a female artist ever). 25 was her second album to be certified Diamond in the US and earned her five Grammy Awards, including Album of the Year, and four Brit Awards, including British Album of the Year. The lead single, ""Hello"", became the first song in the US to sell over one million digital copies within a week of its release. Her fourth studio album 30, was released in 2021 and became the best-selling album worldwide including in the US and UK. 30 won the 2022 Brit Award for British Album of the Year.',
    'https://media.self.com/photos/61981eff70356370bd38e36d/4:3/w_2560%2Cc_limit/adele-singing.jpg'
  ),
  createArtist(
    'Foo Fighters',
    'Foo Fighters is an American rock band formed in 1994 in Seattle, Washington. The band was founded by former Nirvana drummer Dave Grohl as a one-man project following the dissolution of Nirvana after the suicide of Kurt Cobain. The group took its name from foo fighter, a nickname coined by Allied aircraft pilots for UFOs and other aerial phenomena. Over the course of their career, Foo Fighters have won 12 Grammy Awards, including Best Rock Album four times. They were inducted into the Rock and Roll Hall of Fame in 2021, their first year of eligibility.',
    'https://www.rollingstone.com/wp-content/uploads/2022/03/210610_RollingStone_FooFighters_JN_0438_02_RGB.jpg'
  ),
  createArtist(
    'Lamb of God',
    'Lamb of God is an American heavy metal band from Richmond, Virginia. Formed in 1994 as Burn the Priest, the group consists of bassist John Campbell, vocalist Randy Blythe, guitarists Mark Morton and Willie Adler, and drummer Art Cruz. Lamb of God is considered a significant member of the New Wave of American Heavy Metal movement, having been referred to as one of ""big four"" bands of the movement, along with Avenged Sevenfold, Slipknot and Trivium. Since their formation, Lamb of God has released ten studio albums, one live album, one compilation album, three DVDs, two EPs, and twenty-eight singles. Their cumulative sales equal almost two million in the United States, including two albums certified Gold by the RIAA. ',
    'https://www.metalsucks.net/wp-content/uploads/2021/02/Lamb-of-God-2021-1280x720.jpg'
  ),
  createArtist(
    'Pendulum',
    'Pendulum is an Australian drum and bass band founded in 2002. Pendulum originally formed in the city of Perth, Western Australia, by Rob Swire, Gareth McGrillen and Paul ""El Hornet"" Harding. The band was later expanded to include members Ben Mount, Peredur ap Gwynedd and KJ Sawka. Members Swire and McGrillen also formed the electro house duo Knife Party. Their musical style consists of a fusion of drum and bass (along with other electronic genres), alternative rock and heavy metal, with the inclusion of acoustic instruments. This creates a sound reminiscent of electronic rock, albeit with much more prominent drum and bass and, more recently, dubstep influences. ',
    'https://i.pinimg.com/originals/1f/fa/32/1ffa320f0f7690759724a7b4fa647e4e.jpg'
  ),
  createArtist(
    'Linkin Park',
    'Linkin Park is an American rock band from Agoura Hills, California. Categorized as alternative rock, their earlier music spanned a fusion of heavy metal and hip hop, while their later music features more electronica and pop elements. Formed in 1996, Linkin Park rose to international fame with their debut studio album, Hybrid Theory (2000), which became certified Diamond by the Recording Industry Association of America (RIAA). Linkin Park is among the best-selling bands of the 21st century having sold over 100 million records worldwide. They have won two Grammy Awards, six American Music Awards, two Billboard Music Awards, four MTV Video Music Awards, 10 MTV Europe Music Awards and three World Music Awards. In 2003, MTV2 named Linkin Park the sixth-greatest band of the music video era and the third-best of the new millennium. Linkin Park went on a hiatus when longtime lead vocalist Bennington died by suicide in July 2017. In April 2020, bassist Dave Farrell revealed the band was working on new music, though they have stated they will not be touring for the foreseeable future.',
    'https://townsquare.media/site/366/files/2014/12/Linkin-Park.jpg'
  ),
  createArtist(
    'Nine Inch Nails',
    'Nine Inch Nails, commonly abbreviated as NIN and stylized as NIИ, is an American industrial rock band formed in 1988 in Cleveland, Ohio. Singer, songwriter, multi-instrumentalist and producer Trent Reznor was the only permanent member of the band until the official addition of English musician Atticus Ross in 2016. When touring, Reznor typically assembles a live band to perform with him under the Nine Inch Nails name. Their live performances are noted for their extensive use of thematic visual elements, complex special effects, and elaborate lighting; songs are often rearranged to fit any given performance, and melodies or lyrics of songs that are not scheduled to be performed are sometimes assimilated into other songs. Nine Inch Nails has sold over 20 million records and have been nominated for 13 Grammy Awards. ',
    'https://www.rollingstone.com/wp-content/uploads/2019/10/NineInchNails.jpg'
  ),
  createArtist(
    'Muse',
    'Muse are an English rock band from Teignmouth, Devon, formed in 1994. The band consists of Matt Bellamy (lead vocals, guitar, keyboards), Chris Wolstenholme (bass guitar, backing vocals), and Dominic Howard (drums). Rolling Stone stated Muse possessed ""stadium-crushing songs"" and they have won numerous awards, including two Grammy Awards, two Brit Awards, five MTV Europe Music Awards and eight NME Awards. As of June 2016, they have sold over 30 million albums worldwide.',
    'https://www.nme.com/wp-content/uploads/2020/05/muse_band_band_nme_riley_2000.jpg'
  ),
  createArtist(
    'Queens of the Stone Age',
    'Queens of the Stone Age is an American rock band formed in 1996 in Palm Desert, California. The band was founded by vocalist and guitarist Josh Homme after the dissolution of his previous band Kyuss. Homme has been the only constant member throughout multiple line-up changes. Queens of the Stone Age are known for their blues, Krautrock and electronica-influenced style of riff-oriented and rhythmic hard rock music, coupled with distinct falsetto vocals from Josh Homme and unorthodox guitar scales. The band have been nominated for Grammy Awards seven times; four times for Best Hard Rock Performance, twice for Best Rock Album, and once for Best Rock Performance.',
    'https://www.redbrick.me/wp-content/uploads/2017/09/qotsa.jpg'
  ),
  createArtist(
    'Led Zeppelin',
    'Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With a heavy, guitar-driven sound, they are cited as one of the progenitors of hard rock and heavy metal, although their style drew from a variety of influences, including blues and folk music. Led Zeppelin have been credited as significantly impacting the nature of the music industry, particularly in the development of album-oriented rock and stadium rock. Led Zeppelin are one of the best-selling music artists of all time; their total record sales are estimated to be between 200 to 300 million units worldwide. They achieved eight consecutive UK number-one albums and six number-one albums on the US Billboard 200, with five of their albums certified Diamond in the US. Rolling Stone magazine described them as ""the heaviest band of all time"", ""the biggest band of the Seventies"", and ""unquestionably one of the most enduring bands in rock history"". ',
    'https://static01.nyt.com/images/2020/03/11/arts/09ledzep1/merlin_170257290_0b3691d0-3945-4b45-867b-02980ff7531e-superJumbo.jpg'
  ),
  createArtist(
    '50 Cent',
    'Curtis James Jackson III (born July 6, 1975), known professionally as 50 Cent, is an American rapper, actor and entrepreneur. Known for his impact in the hip hop industry, he has been described as a ""master of the nuanced art of lyrical brevity"". With the aid of Eminem and Dr. Dre, 50 Cent became one of the best selling rappers in the world and rose to prominence as de facto leader of East Coast hip hop group G-Unit. 50 Cent has sold over 30 million albums worldwide and won several awards, including a Grammy Award, thirteen Billboard Music Awards, six World Music Awards, three American Music Awards and four BET Awards.',
    'https://i.ytimg.com/vi/xoiM4NRljdg/maxresdefault.jpg'
  )
];
const releases = [
  createRelease(
    'Blackbird',
    'https://open.spotify.com/album/0Fk4lWAADmFMmuW6jp6xyE?si=zfvgE6wQRxOec_U35cM-nQ',
    'https://i.scdn.co/image/ab67616d00001e02d73fa7125044e0d80f12960d',
    '2007',
    'Hard Rock'
  ),
  createRelease(
    'Master of Reality',
    'https://open.spotify.com/album/3kBG6q0aXKxzn01wKTwZr5?si=I6pecDT6S6e8GvGq8XginA',
    'https://i.scdn.co/image/ab67616d00001e02b7ec2b4b9c76b3b737990a42',
    '1971',
    'Metal'
  ),
  createRelease(
    'Lemonade',
    'https://open.spotify.com/album/7dK54iZuOxXFarGhXwEXfF?si=fam6ZYMkSPqMnf4Iejll3Q',
    'https://i.scdn.co/image/ab67616d00001e0289992f4d7d4ab94937bf9e23',
    '2016',
    'R&B'
  ),
  createRelease(
    'Sempiternal',
    'https://open.spotify.com/album/6IYPmM3xsOPL2XPSvf1ZAz?si=y1XNUq1vRXidJcGyO7HmJQ',
    'https://i.scdn.co/image/ab67616d00001e0260cf7c8dd93815ccd6cb4830',
    '2013',
    'Rock'
  ),
  createRelease(
    "A Grand Don't Come For Free",
    'https://open.spotify.com/album/365ETCJBUmEWroc4UGBS1u?si=WpAghAu6To-NYN3CoPTKaQ',
    'https://i.scdn.co/image/ab67616d00001e024bf409ede02e2a4069fd02a8',
    '2004',
    'Hip Hop'
  ),
  createRelease(
    'Fades Away (feat. MishCatt) (Tribute Concert Version)',
    'https://open.spotify.com/album/3gtlfmfpJjdhUdpfeqj8KO?si=pccwgAfjQ86cGweiBZji_w',
    'https://i.scdn.co/image/ab67616d00001e025ff8ae1ce5d5614785965f7b',
    '2019',
    'Electronic'
  ),
  createRelease(
    'Welcome Home',
    'https://open.spotify.com/track/42GP0xKtkolBnmqQRvSllO?si=4eef94916506440c',
    'https://i.scdn.co/image/ab67616d00001e02a9250e237a834437fa7d8739',
    '2005',
    'Progressive'
  ),
  createRelease(
    'Through The Fire & The Flames',
    'https://open.spotify.com/track/2eB7JqIY4hTTSz31h6bjwR?si=6b9f6dfa2c134e2a',
    'https://i.scdn.co/image/ab67616d00001e02aba1be9e11135df25f6f1e49',
    '2006',
    'Metal'
  ),
  createRelease(
    "(I Don't Want to Go to) Chelsea",
    'https://open.spotify.com/track/7uYyLVNjKY49L8o3AouXZd?si=c45de7119da9400a',
    'https://i.scdn.co/image/ab67616d00001e02c39aa62b10cea6cd2c2c1ed8',
    '1978',
    'Rock'
  ),
  createRelease(
    'Scorpion',
    'https://open.spotify.com/album/1ATL5GLyefJaxhQzSPVrLX?si=G7nJfIyqQumefFlDrF29yA',
    'https://i.scdn.co/image/ab67616d00001e02f907de96b9a4fbc04accc0d5',
    '2018',
    'Pop'
  ),
  createRelease(
    'Encore',
    'https://open.spotify.com/album/7tsXPtLqhab1zWeubbf6JH?si=Zxr-cH_OTiOFReijGauU0Q',
    'https://i.scdn.co/image/ab67616d00001e02dfd0ebe9b4b99f621f376453',
    '2004',
    'Rap'
  ),
  createRelease(
    'Gorrilaz',
    'https://open.spotify.com/album/4tUxQkrduOE8sfgwJ5BI2F?si=dPrtU6pWTICjRJ7oyZCxCA',
    'https://i.scdn.co/image/ab67616d00001e02f6c46838e4425ea96e2562fe',
    '2001',
    'Pop'
  ),
  createRelease(
    'The Real Thing',
    'https://open.spotify.com/album/6LEP3L94jnkqjOxYJWPRP0?si=FhcwfyfqRtGKAiha_KpGyg',
    'https://i.scdn.co/image/ab67616d00001e02e081ef6de656ee714788ea0d',
    '1989',
    'Metal'
  ),
  createRelease(
    'Square Hammer',
    'https://open.spotify.com/track/5TNhjanmvwvmjCz2WYwSAv?si=63d181f8b3c34836',
    'https://i.scdn.co/image/ab67616d00001e025b752bd7476346431a8d1e79',
    '2016',
    'Metal'
  ),
  createRelease(
    'No More Idols',
    'https://open.spotify.com/album/6NcFWs4RTh6ICkhSh3gSaO?si=Ek9gCEUeQ-u7Bzim-Obwpg',
    'https://i.scdn.co/image/ab67616d00001e02c706d69471bfdbb585355915',
    '2011',
    'Electronic'
  ),
  createRelease(
    'Underneath',
    'https://open.spotify.com/album/70kThssMOMBi4GyBPCk0Gu?si=TwOQ5yQYTeWHxKgi4wSY7g',
    'https://i.scdn.co/image/ab67616d00001e026309a1f13c14df29de8177a5',
    '2020',
    'Metal'
  ),
  createRelease(
    'The Mountain',
    'https://open.spotify.com/album/3RBULTZJ97bvVzZLpxcB0j?si=su386C01TluniYpW0R9mag',
    'https://i.scdn.co/image/ab67616d00001e02817a9af094d11b2b6936f0ba',
    '2013',
    'Progressive'
  ),
  createRelease(
    '2 Minutes to Midnight',
    'https://open.spotify.com/track/2SrVGpjv0mqCR6j9EZPSm2?si=4cd4a2c9758a48ea',
    'https://i.scdn.co/image/ab67616d00001e020335e5389b34f6acfb73a82d',
    '1984',
    'Metal'
  ),
  createRelease(
    'ABC',
    'https://open.spotify.com/track/6D8kc7RO0rqBLSo2YPflJ5?si=9de9063bae8f4bc8',
    'https://i.scdn.co/image/ab67616d00001e029df68560791d0b3dab491867',
    '1970',
    'Pop'
  ),
  createRelease(
    'As Daylight Dies',
    'https://open.spotify.com/album/42EsiMKN2jXw0RafNy2yYn?si=jvW15iBwSoOnza27FdMrXw',
    'https://i.scdn.co/image/ab67616d00001e0204672df7a2e206de29f01166',
    '2006',
    'Metal'
  ),
  createRelease(
    'Old Town Road',
    'https://open.spotify.com/track/2YpeDb67231RjR0MgVLzsG?si=b047bd0542fa4f2c',
    'https://i.scdn.co/image/ab67616d00001e02c0e7bf5cdd630f314f20586a',
    '2018',
    'Hip Hop'
  ),
  createRelease(
    'Crack The Skye',
    'https://open.spotify.com/album/2W2nqEKXWBorbq5yvm3jZg?si=852kuaBtSqeNe22GXqd0pw',
    'https://i.scdn.co/image/ab67616d00001e02ac79283ccb6d08af31fd33d8',
    '2009',
    'Metal'
  ),
  createRelease(
    'Enter Sandman',
    'https://open.spotify.com/track/5sICkBXVmaCQk5aISGR3x1?si=a5e294876e7e4156',
    'https://i.scdn.co/image/ab67616d00001e02cf84c5b276431b473e924802',
    '1991',
    'Metal'
  ),
  createRelease(
    'Iowa',
    'https://open.spotify.com/album/5Zs0mNCTs73CqPKbZPWFX9?si=eR6QSBz0Rkid8HfKO-SzKw',
    'https://i.scdn.co/image/ab67616d00001e02a62eefef8ee83d5e09aa8331',
    '2001',
    'Metal'
  ),
  createRelease(
    'R&G (Rythm & Gangsta): The Masterpiece',
    'https://open.spotify.com/album/797fkvAtk0iZvP1HHPCWbp?si=GNWVPoz7TciekHh7kRtWbw',
    'https://i.scdn.co/image/ab67616d00001e02e803716268c173c3f9a0c057',
    '2004',
    'Rap'
  ),
  createRelease(
    'Royal Blood',
    'https://open.spotify.com/album/0BFzNaeaNv4mahOzwZFGHK?si=81xYpoQrRg2mjl5JEAhF4A',
    'https://i.scdn.co/image/ab67616d00001e0269471a9c0a6073a9beb81410',
    '2014',
    'Rock'
  ),
  createRelease(
    'Watch The Throne (Deluxe)',
    'https://open.spotify.com/album/2P2Xwvh2xWXIZ1OWY9S9o5?si=7itSRVfEQMq-nBfe7tomcg',
    'https://i.scdn.co/image/ab67616d00001e024a767758e8ebe2443591c9fd',
    '2011',
    'Rap'
  ),
  createRelease(
    'Graduation',
    'https://open.spotify.com/album/4SZko61aMnmgvNhfhgTuD3?si=CA7BkX2xQFOx2a10yaNs9w',
    'https://i.scdn.co/image/ab67616d00001e0226f7f19c7f0381e56156c94a',
    '2007',
    'Rap'
  ),
  createRelease(
    'Pink Friday',
    'https://open.spotify.com/album/3LJhoYn4nnHmvPRO3ppbsl?si=ubWKGOQTSzi2JmRon2ksOA',
    'https://i.scdn.co/image/ab67616d00001e02aa7d2641af0fa4c1f76fafbf',
    '2010',
    'Pop'
  ),
  createRelease(
    'Future Nostalgia',
    'https://open.spotify.com/album/5lKlFlReHOLShQKyRv6AL9?si=Q3Ft-zNFSoa6IvB8lGskpA',
    'https://i.scdn.co/image/ab67616d00001e02d4daf28d55fe4197ede848be',
    '2020',
    'Pop'
  ),
  createRelease(
    '21',
    'https://open.spotify.com/album/5duyQokC4FMcWPYTV9Gpf9?si=f-LJfnINQIyMsElkz2_rtA',
    'https://i.scdn.co/image/ab67616d00001e02fb7eedd9877b0c60597ef3e5',
    '2011',
    'Pop'
  ),
  createRelease(
    'The Colour And The Shape',
    'https://open.spotify.com/album/30ly6F6Xl0TKmyBCU50Khv?si=Xhj8R4fHSeGltD4k_aN5VA',
    'https://i.scdn.co/image/ab67616d00001e020389027010b78a5e7dce426b',
    '1997',
    'Rock'
  ),
  createRelease(
    'Ashes of the Wake',
    'https://open.spotify.com/album/3ffdUrEvCQJX6mn2ZTq93m?si=Z0vDNhhZRr6t7iRAJhSvlw',
    'https://i.scdn.co/image/ab67616d00001e02b12877d8bdfaa0f19b4624fa',
    '2004',
    'Metal'
  ),
  createRelease(
    'Immersion',
    'https://open.spotify.com/album/3XtEGVx9uh7J46nBzEc1VS?si=d2yeRVX7SvyeaNCmnN9MeQ',
    'https://i.scdn.co/image/ab67616d0000b27330f8e0f777376780c4077507',
    '2010',
    'Drum and bass'
  ),
  createRelease(
    'Meteora',
    'https://open.spotify.com/album/0f7R0jf0pcTb6K6IVVPcMD?si=4YMkp2ExT7ab1jGasA2r9w',
    'https://i.scdn.co/image/ab67616d00001e0289a8fab8bf8cd2b77da1fd17',
    '2003',
    'Rock'
  ),
  createRelease(
    'The Downward Spiral',
    'https://open.spotify.com/album/5I7lLu8xXJfGRdFUqHaLQU?si=JlYgAjC2TIiw6IPTw7S--w',
    'https://i.scdn.co/image/ab67616d0000b2734078c255069c0e7a2553fa4a',
    '1994',
    'Rock'
  ),
  createRelease(
    'Absolution',
    'https://open.spotify.com/album/0HcHPBu9aaF1MxOiZmUQTl?si=bQ8AP7yaQ_ukTzeyqwO-8A',
    'https://i.scdn.co/image/ab67616d00001e028cb690f962092fd44bbe2bf4',
    '2004',
    'Rock'
  ),
  createRelease(
    'Songs For The Deaf',
    'https://open.spotify.com/album/4w3NeXtywU398NYW4903rY?si=tG3Cdl7RSla0MvoOKlzYRg',
    'https://i.scdn.co/image/ab67616d00001e029eec33b045d88f87b9b06e67',
    '2002',
    'Rock'
  ),
  createRelease(
    'Mothership (Remastered)',
    'https://open.spotify.com/album/4wExFfncaUIqSgoxnqa3Eh?si=xbxHaQH2QfyAMsnNWNyYig',
    'https://i.scdn.co/image/ab67616d00001e0222f1b6c28ce5735646b2e569',
    '2007',
    'Rock'
  ),
  createRelease(
    "Get Rich Or Die Tryin'",
    'https://open.spotify.com/album/5G5rgQHzdQnw32SI0WjIo5?si=41qfBTl3RFiJ-w8m2fE-sw',
    'https://i.scdn.co/image/ab67616d00001e02d843fabb75fef14010e30cae',
    '2003',
    'Rap'
  )
];

export default {
  releases,
  artists
};
