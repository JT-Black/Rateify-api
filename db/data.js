import Artist from '../models/artist.js';

function createArtist(name, img, bio) {
  return {
    name: name,
    bio: bio,
    img: img
  };
}
function createRelease(title, url, artwork) {
  return {
    title: title,
    url: url,
    artwork: artwork,
    artist: ''
  };
}
const artists = [
  createArtist(
    'Neil Young',
    'Crazy Canadian folk rock dude who took his stuff off Spotify recently, originally from Winnipeg, Young moved to Los Angeles and joined Buffalo Springfield, and later Crosy, Stills, Nash & Young before embarking on his solo career with backing band Crazy Horse',
    'https://i.scdn.co/image/ab67706c0000bebb47c5c9ff9e702c89bb0c3130'
  ),
  createArtist(
    'Beyonce',
    'Former member of Destinys Child who went on to achieve massive solo success but still had to tolerate a philandering husband',
    'https://i.scdn.co/image/ab6761610000f178d3d058be8485c8583703b6d2'
  ),
  createArtist(
    'Metallica',
    'Heavy Metal supergroup who hated Napster',
    'https://i.scdn.co/image/ab6761610000f1788101d13bdd630b0889acd2fd'
  ),
  createArtist(
    'Jay-Z',
    'Brooklyn HipHop artist who rose to prominence in the nineties, and later married Beyonce',
    'https://i.scdn.co/image/ab6761610000f178c75afcd5a9027f60eaebb5e4'
  ),
  createArtist(
    'AC/DC',
    'Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young.',
    'https://i.scdn.co/image/ab6761610000f178c4c77549095c86acb4e77b37'
  ),
  createArtist(
    'Fleetwood Mac',
    'British-American rock band, formed in London in 1967.',
    'https://i.scdn.co/image/ab6761610000f178249d55f2d68a44637905c57e'
  ),
  createArtist(
    'Nirvana',
    'American rock band formed in Aberdeen, Washington, in 1987. Founded by lead singer and guitarist Kurt Cobain and bassist Krist Novoselic, the band went through a succession of drummers, most notably Chad Channing, before recruiting Dave Grohl in 1990.',
    'https://i.scdn.co/image/a4e10b79a642e9891383448cbf37d7266a6883d6'
  ),
  createArtist(
    'The Beatles',
    'English rock band, formed in Liverpool in 1960, that comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band of all time and were integral to the development of 1960s counterculture.',
    'https://i.scdn.co/image/ab6761610000f178e9348cc01ff5d55971b22433'
  ),
  createArtist(
    'Bob Marley',
    'Jamaican singer, songwriter, and musician. Considered one of the pioneers of reggae, his musical career was marked by fusing elements of reggae, ska, and rocksteady, as well as his distinctive vocal and songwriting style. His contributions to music increased the visibility of Jamaican music worldwide, and made him a global figure in popular culture to this day.',
    'https://i.scdn.co/image/ab67616d0000b273ef2671dd513f4e20c6fddd26'
  ),
  createArtist(
    'Notorious B.I.G',
    'Christopher George Latore Wallace, better known by his stage names the Notorious B.I.G., Biggie Smalls, or simply Biggie, was an American rapper and songwriter. Rooted in the New York rap scene and gangsta rap traditions, he is widely considered one of the greatest rappers of all time.',
    'https://i.scdn.co/image/9bb42de208edcb69653a8e7951fa93b13f598cdd'
  ),
  createArtist(
    'Billie Eilish',
    'American singer-songwriter who first gained public attention in 2015 with her debut single Ocean Eyes, which was subsequently released by Darkroom, an imprint of Interscope Records. The song was written and produced by her brother, Finneas OConnell, with whom she frequently collaborates on music and in live shows. Eilish is the 26th-highest-certified digital singles artist and one of the most successful artists of the 2010s.',
    'https://i.scdn.co/image/ab6761610000f178d8b9980db67272cb4d2c3daf'
  ),
  createArtist(
    'Grace Jones',
    'Jamaican model, singer and actress. Jones is one of the all-time most bad ass of bad asses. She started modelling in 1966, released her first solo album in 1977, and has appeared in numerous films since the mid-eighties, and is a global figure in popular culture to this day. ',
    'https://i.scdn.co/image/ab6761610000f178c1c97da9c6326675e8c493cd'
  ),
  createArtist(
    'Nina Simone',
    'American singer, songwriter, musician, arranger, and civil rights activist. Her music spanned styles including classical, jazz, blues, folk, R&B, gospel and pop. Her music has been covered by everybody and she remains a huge influence on musicians to this day.',
    '	https://i.scdn.co/image/ab6761610000f178136c51c848c26a6cce7f9e56'
  ),
  createArtist(
    'Rihanna',
    'Barbadian singer, actress, fashion designer, and businesswoman, Robyn Rihanna Fenty is known for her involvement in humanitarian causes, entrepreneurial ventures, and the fashion industry.She is the first black woman to head a luxury brand for LVMH. Rihanna has also ventured into acting, appearing in major roles in several movies.',
    'https://i.scdn.co/image/ab6761610000f178019d6873a01987cbe35888cd'
  ),
  createArtist(
    'Dolly Parton',
    'Dolly Rebecca Parton (born January 19, 1946) is an American singer-songwriter, actress, and businesswoman, known primarily for her work in country music. She has founded a number of charitable and philanthropic organizations, chief among which is the Dollywood Foundation, which manages a number of projects to bring education and poverty relief to East Tennessee where she grew up. She also has a huge collection of tattoos is an incredible bad ass in her own right.',
    'https://i.scdn.co/image/ab6761610000f17820ee5dd7929b2eb0b8886cac'
  ),
  createArtist(
    'Taylor Swift',
    'American singer-songwriter. Her discography spans multiple genres, and her narrative songwriting, which is often inspired by her personal life, has received widespread media coverage and critical praise. For some reason Kanye West has had his knickers twisted over her for some time.',
    'https://i.scdn.co/image/ab6761610000f1789e3acf1eaf3b8846e836f441'
  ),
  createArtist(
    'Ariana Grande',
    'American singer, songwriter, and actress, and ponytail advocate. Her four-octave vocal range has received public acclaim, and her personal life has been the subject of widespread media attention. She has received numerous accolades throughout her career, including two Grammy Awards, one Brit Award, one Bambi Award, two Billboard Music Awards, three American Music Awards, nine MTV Video Music Awards, and 26 Guinness World Records.',
    'https://i.scdn.co/image/ab6761610000f178cdce7620dc940db079bf4952'
  )
];
const releases = [
  createRelease(
    'Neil Young At Live Aid',
    'https://open.spotify.com/album/31rLr6NpNw9wggFD4QGfhD',
    'https://i.scdn.co/image/ab67616d00001e027bdf6ff52c0ef1366d741721',
    'Neil Young'
  ),
  createRelease(
    'Dangerously In Love',
    'https://open.spotify.com/album/06v9eHnqhMK2tbM2Iz3p0Y',
    'https://i.scdn.co/image/ab67616d0000b273a9fd4a0405945cd51e8de130',
    'Beyonce'
  ),
  createRelease(
    'Master Of Puppets',
    'https://open.spotify.com/album/2Lq2qX3hYhiuPckC8Flj21',
    'https://i.scdn.co/image/ab67616d00001e02668e3aca3167e6e569a9aa20',
    'Metallica'
  ),
  createRelease(
    'Life And Times Of Sean Carter',
    'https://open.spotify.com/album/3rWJsuu7ukoZZhp7YYkjNZ',
    'https://i.scdn.co/image/ab67616d0000b273188099f301c32148ab07a557',
    'Jay-Z'
  ),
  createRelease(
    'Highway To Hell',
    'https://open.spotify.com/album/10v912xgTZbjAtYfyKWJCS',
    'https://i.scdn.co/image/ab67616d00001e0251c02a77d09dfcd53c8676d0',
    'AC/DC'
  ),
  createRelease(
    'Rumours',
    'https://open.spotify.com/album/1bt6q2SruMsBtcerNVtpZB',
    'https://i.scdn.co/image/ab67616d00001e020001af4f80be77069fc8fd41',
    'Fleetwood Mac'
  ),
  createRelease(
    'Nevermind',
    'https://open.spotify.com/album/2UJcKiJxNryhL050F5Z1Fk',
    'https://i.scdn.co/image/ab67616d00001e02fbc71c99f9c1296c56dd51b6',
    'Nirvana'
  ),
  createRelease(
    'Abbey Road (Remastered)',
    'https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN',
    'https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25',
    'The Beatles'
  ),
  createRelease(
    'Legend',
    'https://open.spotify.com/album/4jKeipwuUTjlx9USNYdhZn',
    'https://i.scdn.co/image/ab67616d00001e02413a6c2c7b296d98171e5e21',
    'Bob Marley'
  ),
  createRelease(
    'Ready To Die',
    'https://open.spotify.com/album/2HTbQ0RHwukKVXAlTmCZP2',
    'https://i.scdn.co/image/ab67616d00001e02db09958534ac66f9a90d3cf7',
    'Notorious B.I.G'
  ),
  createRelease(
    'When We All Fall Asleep, Where Do We Go',
    'https://open.spotify.com/album/0S0KGZnfBGSIssfF54WSJh',
    'https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce',
    'Billie Eilish'
  ),
  createRelease(
    'Portfolio',
    'https://open.spotify.com/album/1omnfUAyi7BQRSLYcf3sZ4',
    'https://i.scdn.co/image/ab67616d00001e02065b99c2688ccc61113e9fb7',
    'Grace Jones'
  ),
  createRelease(
    'I Put A Spell On You',
    'https://open.spotify.com/album/3ofZeSWPHZOE5WC2tNZDez',
    'https://i.scdn.co/image/ab67616d00001e02425e9a15a4a1b9fe123a1aa7',
    'Nina Simone'
  ),

  createRelease(
    'Loud',
    'https://open.spotify.com/album/7vN82vd1Vq44fjlhjfvHJp',
    'https://i.scdn.co/image/ab67616d00001e022ed326786e4c61c6b1dbf222',
    'Rihanna'
  ),

  createRelease(
    'Run, Rose, Run',
    'https://open.spotify.com/album/50A9Yv2SPJByoZIDO5WVzG',
    'https://i.scdn.co/image/ab67616d00001e02dd7177bf6bda5fe46a75e244',
    'Dolly Parton'
  ),

  createRelease(
    'reputation',
    'https://open.spotify.com/album/6DEjYFkNZh67HP7R9PSZvv',
    'https://i.scdn.co/image/ab67616d00001e02da5d5aeeabacacc1263c0f4b',
    'Taylor Swift'
  ),

  createRelease(
    'Positions',
    'https://open.spotify.com/album/3euz4vS7ezKGnNSwgyvKcd',
    'https://i.scdn.co/image/ab67616d00001e025ef878a782c987d38d82b605',
    'Ariana Grande'
  )
];

export default {
  releases,
  artists
};
