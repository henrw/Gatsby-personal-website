// import moment from 'moment';
// import { Link } from 'gatsby';
import {
  Row, Col, Card, Button, Divider, Space,
} from 'antd';
// import { navigate } from '@reach/router';
import classnames from 'classnames';
import Img from 'gatsby-image';
import isRelativeUrl from 'is-relative-url';
import React from 'react';

import { useStaticQuery, graphql } from "gatsby"
import { useSiteMetadata } from '../../utils/hooks';
import Utils from '../../utils/pageUtils';
import PostTag from '../PostTag';

import * as style from './projectCard.module.less';

const ProjectCard = (props) => {
  const { data: { node }, tagsMap } = props;
  const {
    fields: { slug: { links } }, frontmatter: {
      title, authors, excerpt, path, date, tags, venue, cover,
    },
  } = node;
  const fluid = cover ? cover.childImageSharp.fluid : null;
  // console.log(fluid);

  const siteMetadata = useSiteMetadata();
  const url = Utils.resolvePageUrl(path);

  const pdfData = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `).allFile.edges

  // const handleClick = (e) => {
  //   const tagName = e.target.tagName.toLowerCase();
  //   if (tagName !== 'a' && tagName !== 'span' && url) {
  //     window.location.href = Utils.generateFullUrl(siteMetadata, url);
  //     // navigate(url);
  //   }
  // };

  const generateLink = (link) => {
    let href = '#';
    if (link.url) {
      if (isRelativeUrl(link.url)) {
        const [filename, fileExt] = link.url.split('.')
        if (fileExt === 'pdf') {
          console.log(filename)
          pdfData.forEach(item => {
            if (item.node.name === filename) {
              link.url = item.node.publicURL;
            }
          })
        }
        href = Utils.generateFullUrl(siteMetadata, link.url);
      } else {
        href = link.url;
      }
    }
    return (
      <Button shape="round" href={href} target="_blank" size="small">{link.name}</Button>
    );
  };

  const generateAuthor = (author, index) => {
    let markdown = Utils.parseMarkDown(author, true);
    if (index >= 0 && index !== authors.length - 1) {
      markdown += ',';
    }
    return (
      <Col key={index} xs>
        <span dangerouslySetInnerHTML={{ __html: markdown }} />
      </Col>
    );
  };

  let infoLine = [];
  if (date) {
    infoLine = infoLine.concat([
      <Col xs key="date">
        <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
          {Utils.formatDate(date)}
        </span>
      </Col>,
      <Divider key="date-divider" type="vertical" className={style.divider} />,
    ]);
  }
  if (venue) {
    infoLine = infoLine.concat([
      <Col xs key="venue">
        <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
          {venue}
        </span>
      </Col>,
      <Divider key="venue-divider" type="vertical" className={style.divider} />,
    ]);
  }
  if (tags) {
    infoLine = infoLine.concat(tags.map(
      (tag) => (tagsMap[tag] ? <PostTag key={`tag-${tag}`} tag={tagsMap[tag]} /> : null),
    ));
  } else if (infoLine.length > 0) {
    // delete the divider if there are no tags
    infoLine.pop();
  }

  const excerptHTML = Utils.parseMarkDown(Utils.trimExcerpt(excerpt), true);

  return (
    <Card
      className={classnames(style.projectCard, 'cursor-default')}
      bodyStyle={{ padding: '0.8rem' }}
      style={{ height: '100%', width: '100%' }}
      hoverable
      // onClick={handleClick}
      cover={(
        <a href={Utils.generateFullUrl(siteMetadata, url)}>
          { fluid ? <Img fluid={fluid} /> : <div className={style.postCardImg} />}
        </a>
      )}
    >
      <Row gutter={[8, 0]} align="middle">
        <Card.Meta
          title={(
            <span className={style.title}>
              <a href={Utils.generateFullUrl(siteMetadata, url)}>{title}</a>
            </span>
          )}
          style={{ marginBottom: '4px' }}
        />
        <Row align="middle" gutter={[0, 4]}>
          {infoLine}
        </Row>
        <a href={Utils.generateFullUrl(siteMetadata, url)}>
          <p style={{ marginTop: '1rem' }} dangerouslySetInnerHTML={{ __html: excerptHTML }} />
        </a>
        <Row>
          <Space direction="horizontal">
            {links ? links.map(generateLink) : null}
          </Space>
        </Row>
      </Row>
    </Card>
  );
};

export default ProjectCard;
