import { useEffect } from 'react';
import classes from './app.module.css';
import { cn } from '@react-monorepo/shared';

export function App() {
  useEffect(() => {
    const intersectionHandler = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classes.transition);
        } else {
          entry.target.classList.remove(classes.transition);
        }
      });
    };

    const observer = new IntersectionObserver(intersectionHandler);
    const target = document.querySelector('#thankyou');
    if (target) {
      observer.observe(target);
    }
  }, []);

  return (
    <div className="mx-auto flex h-screen w-screen flex-col justify-around font-mono">
      <h2 className="pt-10 text-center text-3xl">Dummy title</h2>
      <section className="p-10 text-center text-xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
        molestiae ab, labore aliquam facilis esse dignissimos quia non
        consequatur blanditiis omnis. Asperiores ullam maxime odit, laboriosam
        at corporis illum magnam. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Tempore molestiae ab, labore aliquam facilis esse
        dignissimos quia non consequatur blanditiis omnis. Asperiores ullam
        maxime odit, laboriosam at corporis illum magnam. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Tempore molestiae ab, labore aliquam
        facilis esse dignissimos quia non consequatur blanditiis omnis.
        Asperiores ullam maxime odit, laboriosam at corporis illum magnam.
      </section>

      <section className="p-10 text-center text-xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
        molestiae ab, labore aliquam facilis esse dignissimos quia non
        consequatur blanditiis omnis. Asperiores ullam maxime odit, laboriosam
        at corporis illum magnam. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Tempore molestiae ab, labore aliquam facilis esse
        dignissimos quia non consequatur blanditiis omnis. Asperiores ullam
        maxime odit, laboriosam at corporis illum magnam. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Tempore molestiae ab, labore aliquam
        facilis esse dignissimos quia non consequatur blanditiis omnis.
        Asperiores ullam maxime odit, laboriosam at corporis illum magnam.
      </section>

      <section className="p-10 text-center text-xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
        molestiae ab, labore aliquam facilis esse dignissimos quia non
        consequatur blanditiis omnis. Asperiores ullam maxime odit, laboriosam
        at corporis illum magnam. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Tempore molestiae ab, labore aliquam facilis esse
        dignissimos quia non consequatur blanditiis omnis. Asperiores ullam
        maxime odit, laboriosam at corporis illum magnam. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Tempore molestiae ab, labore aliquam
        facilis esse dignissimos quia non consequatur blanditiis omnis.
        Asperiores ullam maxime odit, laboriosam at corporis illum magnam.
      </section>

      <section className="p-10 text-center text-xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
        molestiae ab, labore aliquam facilis esse dignissimos quia non
        consequatur blanditiis omnis. Asperiores ullam maxime odit, laboriosam
        at corporis illum magnam. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Tempore molestiae ab, labore aliquam facilis esse
        dignissimos quia non consequatur blanditiis omnis. Asperiores ullam
        maxime odit, laboriosam at corporis illum magnam. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Tempore molestiae ab, labore aliquam
        facilis esse dignissimos quia non consequatur blanditiis omnis.
        Asperiores ullam maxime odit, laboriosam at corporis illum magnam.
      </section>
      <section className="p-10 text-center text-xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
        molestiae ab, labore aliquam facilis esse dignissimos quia non
        consequatur blanditiis omnis. Asperiores ullam maxime odit, laboriosam
        at corporis illum magnam. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Tempore molestiae ab, labore aliquam facilis esse
        dignissimos quia non consequatur blanditiis omnis. Asperiores ullam
        maxime odit, laboriosam at corporis illum magnam. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Tempore molestiae ab, labore aliquam
        facilis esse dignissimos quia non consequatur blanditiis omnis.
        Asperiores ullam maxime odit, laboriosam at corporis illum magnam.
      </section>

      <section className="p-10 text-center text-xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
        molestiae ab, labore aliquam facilis esse dignissimos quia non
        consequatur blanditiis omnis. Asperiores ullam maxime odit, laboriosam
        at corporis illum magnam. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Tempore molestiae ab, labore aliquam facilis esse
        dignissimos quia non consequatur blanditiis omnis. Asperiores ullam
        maxime odit, laboriosam at corporis illum magnam. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Tempore molestiae ab, labore aliquam
        facilis esse dignissimos quia non consequatur blanditiis omnis.
        Asperiores ullam maxime odit, laboriosam at corporis illum magnam.
      </section>

      <section className="p-10 text-center">
        <h2 id="thankyou" className={cn('text-2xl', classes.initial)}>
          Thank You for Visiting
        </h2>
      </section>
    </div>
  );
}

export default App;
