import React, {  } from "react";
import classNames from 'classnames';

// sections
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import FeatureTile from '../elements/FeatureTile';

// three js 

// react icons
import {IconContext} from "react-icons";
import { GoMarkGithub, GoGitBranch, GoCircuitBoard,  } from "react-icons/go";
import { TbHeartRateMonitor, } from "react-icons/tb";
import { GiServerRack,  } from "react-icons/gi";
import { BsFillShieldLockFill, } from 'react-icons/bs';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'General features',
    paragraph: 'Let`s see what the next generation of engineering can bring to your business.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" >
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

          <IconContext.Provider value={{ style: { verticalAlign: 'middle', width: '60' } }} >

          <FeatureTile 
                textHeader="Customize for your own" 
                textContent="This project is being developed primarily with the idea that the application should be flexible for the end user" 
                imageLink={<GoMarkGithub/>}/>

          <FeatureTile 
                textHeader="Control Versioning"
                textContent="The architecture of the application makes it easy to versionalize your projects and ongoing tests, experiments"
                imageLink={<GoGitBranch/>}/>

          <FeatureTile 
                textHeader="Digital and modern planing" 
                textContent="The built-in VCS makes it easy to integrate modern business processes and planning into your business such as Agile"
                imageLink={<GoCircuitBoard/>}/>

          <FeatureTile 
                textHeader="Distributed" 
                textContent="The application architecture is designed for highload and distributed computing" 
                imageLink={<GiServerRack/>}/>

          <FeatureTile 
                textHeader="Monitor" 
                textContent="The pipeline of calculations at the top level is designed specifically to make it easy to track the load and the calculation process for any engines" 
                imageLink={<TbHeartRateMonitor/>}/>

          <FeatureTile 
                textHeader="Secure"
                textContent="Our systems are developed with a Secure-by-Design approach, which guarantees security at all stages of the application" 
                imageLink={<BsFillShieldLockFill/>}/>
          
          </IconContext.Provider>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;