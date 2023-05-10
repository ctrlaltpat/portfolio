import React, { FC } from 'react';
import { ExpIcons } from './Icons';

interface TechIconProps {
  children: React.ReactNode;
  text: string;
}

enum Exp {
  Deployed = 'I have used this in personal projects 🚢',
  Learning = 'I am learning or interested in learning this 🐣',
  Often = 'I use this often 🛠',
  Paid = 'I have some commercial experience with this 📈',
  Played = 'I have used this a few times 🤓',
}

const TechIcon: FC<TechIconProps> = ({ children, text }) => {
  return (
    <div className='group inline-block m-1 text-orange-600 dark:text-blue-500 text-md hover:cursor-help hover:text-blue-400 dark:hover:text-orange-400'>
      {children}
      <p
        style={{ fontSize: '12px' }}
        className='py-2 px-1 opacity-0 w-96 absolute left-0 bottom-20 mb-1 md:bottom-4 text-left ease-in-out duration-300 group-hover:text-orange-400 group-hover:block group-hover:text-base group-hover:opacity-90 group-hover:dark:text-blue-400'
      >
        {text}
      </p>
    </div>
  );
};

// TODO: Use CMS
const TechExp: FC = () => {
  return (
    <>
      <div className='relative w-auto pt-4 md:w-auto text-left'>
        <TechIcon text={Exp.Paid}>
          <ExpIcons.Angularjs />
        </TechIcon>
        <TechIcon text={Exp.Played}>
          <ExpIcons.Chakraui />
        </TechIcon>
        <TechIcon text={Exp.Played}>
          <ExpIcons.Csharp />
        </TechIcon>
        <TechIcon text={Exp.Paid}>
          <ExpIcons.Css3 />
        </TechIcon>
        <TechIcon text={Exp.Learning}>
          <ExpIcons.Dotnet />
        </TechIcon>
        <TechIcon text={Exp.Paid}>
          <ExpIcons.Git />
        </TechIcon>
        <TechIcon text={Exp.Paid}>
          <ExpIcons.Github />
        </TechIcon>
        <TechIcon text={Exp.Paid}>
          <ExpIcons.Html5 />
        </TechIcon>
        <TechIcon text={Exp.Often}>
          <ExpIcons.Iterm2 />
        </TechIcon>
        <TechIcon text={Exp.Paid}>
          <ExpIcons.Javascript />
        </TechIcon>
        <TechIcon text={Exp.Played}>
          <ExpIcons.Mysql />
        </TechIcon>
        <TechIcon text={Exp.Played}>
          <ExpIcons.Nodedotjs />
        </TechIcon>
        <TechIcon text={Exp.Played}>
          <ExpIcons.Php />
        </TechIcon>
        <TechIcon text={Exp.Played}>
          <ExpIcons.Postgresql />
        </TechIcon>
        <TechIcon text={Exp.Played}>
          <ExpIcons.Python />
        </TechIcon>
        <TechIcon text={Exp.Paid}>
          <ExpIcons.React />
        </TechIcon>
        <TechIcon text={Exp.Paid}>
          <ExpIcons.Redux />
        </TechIcon>
        <TechIcon text={Exp.Deployed}>
          <ExpIcons.Ruby />
        </TechIcon>
        <TechIcon text={Exp.Deployed}>
          <ExpIcons.Rubyonrails />
        </TechIcon>
        <TechIcon text={Exp.Paid}>
          <ExpIcons.Sass />
        </TechIcon>
        <TechIcon text={Exp.Learning}>
          <ExpIcons.Scala />
        </TechIcon>
        <TechIcon text={Exp.Played}>
          <ExpIcons.Sqlite />
        </TechIcon>
        <TechIcon text={Exp.Played}>
          <ExpIcons.Swift />
        </TechIcon>
        <TechIcon text={Exp.Paid}>
          <ExpIcons.Typescript />
        </TechIcon>
        <TechIcon text={Exp.Played}>
          <ExpIcons.Unity />
        </TechIcon>
        <TechIcon text={Exp.Often}>
          <ExpIcons.Visualstudiocode />
        </TechIcon>
        <TechIcon text={Exp.Paid}>
          <ExpIcons.Wordpress />
        </TechIcon>
      </div>
    </>
  );
};

export default TechExp;
