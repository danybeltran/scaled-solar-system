
const diameters = {
  sun: 1392700,
  mercury: 4879.4,
  venus: 12104,
  earth: 12742,
  mars: 6779,
  jupiter: 139820,
  saturn: 116460,
  uranus: 50724,
  neptune: 49244,
  pluto: 2376.6,
  // moons and satelites
  moon: 3474.8,

  // saturn moons
  titan: 5149.5,
  enceladus: 504.2,
  dione: 1122.8,
  hyperion: 270,
  mimas: 396.4,

  // jupiter moons
  europa: 3121.6,
  io: 3643.2,
  ganymede: 5268.2,
  callisto: 4820.6,
  amalthea: 167
}

function toScale(planet: string) {
  const planetDiameter: number = diameters[planet]
  return `${planetDiameter / 100}px`
}


export default function Index() {
 
  return (
    <div
      className='relative h-full'
      style={{
        zoom: 0.1
      }}
    >
      <img
        src='https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg'
        alt=''
        className='z-1 w-full fixed h-full z-1 object-cover'
        style={{
          opacity: '25%'
        }}
      />
      <div className='absolute top-0 left-0 h-auto overflow-y-scroll w-full overflow-auto flex items-center flex-col justify-center gap-y-[8000px]'>
        <img
          src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/sun.png'
          alt=''
          width={toScale('sun')}
        />
        <img
          src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mercury.png'
          alt=''
          width={toScale('mercury')}
        />{' '}
        <img
          src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/venus.png'
          alt=''
          width={toScale('venus')}
        />
        <div className='flex items-center justify-center space-x-72'>
          <img
            src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/earth.png'
            alt=''
            width={toScale('earth')}
          />
          <img
            src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/moon.png'
            alt=''
            width={toScale('moon')}
          />
        </div>
        <img
          src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png'
          alt=''
          width={toScale('mars')}
        />
        <div className='flex items-center justify-center space-x-72'>
          {/*
          europa
          io
          ganymede
          callisto
          amalthea
          */}
          <img
            src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/jupiter.png'
            alt=''
            width={toScale('jupiter')}
          />
          <img
            src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/europa.png'
            alt=''
            width={toScale('europa')}
          />
          <img
            src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/io.png'
            alt=''
            width={toScale('io')}
          />
          <img
            src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/ganymede.png'
            alt=''
            width={toScale('ganymede')}
          />
          <img
            src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/callisto.png'
            alt=''
            width={toScale('callisto')}
          />
          <img
            src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/amalthea.png'
            alt=''
            width={toScale('amalthea')}
          />
        </div>
        <div className='flex items-center justify-center space-x-72'>
          {/*
          titan
          enceladus
          dione
          hyperion
          mimas
          */}
          <img
            src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/saturn.png'
            alt=''
            width={toScale('saturn')}
          />
          <img
            src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/titan.png'
            alt=''
            width={toScale('titan')}
          />
          <img
            src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/enceladus.png'
            alt=''
            width={toScale('enceladus')}
          />
          <img
            src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/dione.png'
            alt=''
            width={toScale('dione')}
          />
          <img
            src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/hyperion.png'
            alt=''
            width={toScale('hyperion')}
          />
          <img
            src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mimas.png'
            alt=''
            width={toScale('mimas')}
          />
        </div>
        <img
          src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/uranus.png'
          alt=''
          width={toScale('uranus')}
        />
        <img
          src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/neptune.png'
          alt=''
          width={toScale('neptune')}
        />
        <img
          src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/pluto.png'
          alt=''
          width={toScale('pluto')}
        />
      </div>
    </div>
  )
}
