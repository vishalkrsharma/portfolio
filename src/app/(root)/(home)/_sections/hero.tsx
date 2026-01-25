import { BackgroundLines } from '@/components/ui/background-lines';
import { PixelatedCanvas } from '@/components/ui/pixelated-canvas';

const Hero = () => {
  return (
    <BackgroundLines className='min-h-screen mx-auto px-4 py-10 flex flex-col justify-center items-center gap-8'>
      <div className='z-20 flex flex-col justify-center items-center gap-4 -pt-20'>
        {/* <Avatar
          name={process.env.NEXT_PUBLIC_FULL_NAME || '-'}
          size={150}
          variant='beam'
        /> */}
        <PixelatedCanvas
          src='/images/vishalkrsharma.webp'
          width={250}
          height={250}
          cellSize={4}
          dotScale={0.9}
          shape='square'
          backgroundColor='#000000'
          dropoutStrength={0.1}
          interactive
          distortionStrength={0.1}
          distortionRadius={75}
          distortionMode='repel'
          followSpeed={0.2}
          jitterStrength={4}
          jitterSpeed={1}
          sampleAverage
          className='rounded-full'
        />
        <div className='font-doto text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center'>
          Hi! I&#39;m
          <br />
          <div className="text-primary font-black relative inline-block before:content-[''] before:block before:absolute before:w-full before:h-3 before:bg-foreground/10 before:bottom-1 before:left-0 before:right-0 before:-z-10">
            Vishal Kumar Sharma
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
};

export default Hero;
