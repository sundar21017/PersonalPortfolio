/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  const handleDownload = (val) => {
      window.open(val, '_blank'); // Opens the URL in a new tab/window
  };

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <span type='button' className='btn btn--outline' onClick={() => handleDownload(resume)}>
            Resume
          </span>
        )}

        {social && (
          <>
            {social.github && (
              <span
                href={social.github}
                aria-label='github'
                className='link link--icon'
                onClick={() => handleDownload(social.github)}
              >
                <GitHubIcon />
              </span>
            )}

            {social.linkedin && (
              <span
                aria-label='linkedin'
                className='link link--icon'
                onClick={() => handleDownload(social.linkedin)}
              >
                <LinkedInIcon />
              </span>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
