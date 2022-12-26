import { Container } from 'rsuite';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../../components/PageLayout/Footer';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import Panel from '../../components/Panel';
import SEO from '../../components/Seo';

const Projects = ({ data }) => (
  <>
    <SEO
      title="Projects"
      description="I like blogging about various web technologies and other stuff related to
          javascript and other trends like graphql, prisma etc. This blog expresses my views of various technologies
          and scenarios I have come across in realtime."
      path="projects"
    />
    <div className="marginTopTitle">
      <h1 className="titleSeparate">Projects</h1>
      <Panel type="projects" data={data} />
    </div>
  </>
);

Projects.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    allTag(
      sort: { fields: [count], order: DESC },
      filter: { projects: { eq: true } }
    ) {
      edges {
        node {
          name
          color
          path
        }
      }
    }
    allMdx(
      filter: { 
        fileAbsolutePath: { regex: "/projects\/.*\/index\\.mdx?$/" }
      }
      sort: { fields: [frontmatter___priority, frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            cover {
              childImageSharp {
                fluid(maxWidth: 320, maxHeight: 180, fit: CONTAIN, background: "rgba(0,0,0,0)") {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            date
            venue
            authors
            path
            title
            tags
            excerpt
            priority
            links {
              name
              url
            }
          }
          fileAbsolutePath
        }
      }
    }
  }
`;

export default Projects;
