import React from 'react';

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://statics.pkumozzie.cn/huayi/logo.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#product',
          children: [
            {
              children: (
                <span>
                  <p>产品</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#contact',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>联系我们</p>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner01DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper l1xhc7u69gg-editor_css' },
  title: {
    className: 'banner0-title l1xdi6p6yt-editor_css',
    children: 'https://statics.pkumozzie.cn/huayi/logo-big.png',
  },
  content: {
    className: 'banner0-content l1xdinkvq2-editor_css',
    children: (
      <span>
        <span>
          <span>
            <span>
              <p>一家致力于量子计算领域的高科技公司</p>
            </span>
          </span>
        </span>
      </span>
    ),
  },
  button: {
    className: 'banner0-button l1xhc61dnhr-editor_css',
    href: '#product',
    children: 'Learn More',
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span id="product">
            <p>核心产品</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon l1xhu1kh12a-editor_css',
              children: 'https://statics.pkumozzie.cn/huayi/computer.jpg',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>
                    大规模离子阱量子计算机
                  </p>
                </span>
              ),
            },
            { name: 'content', children: '超越经典计算机的极限算力' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon l1xht7jimt-editor_css',
              children: 'https://statics.pkumozzie.cn/huayi/qcloud.jpg',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>量子云服务</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: '线上计算，便捷使用',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon l1xhtq5ruu-editor_css',
              children: 'https://statics.pkumozzie.cn/huayi/custom.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>定制离子阱系统</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: '满足用户的定制化需求',
            },
          ],
        },
      },
    ],
  },
};
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://statics.pkumozzie.cn/huayi/duan.png',
    className: 'l1xi4sgrvr-editor_css',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>我们是谁</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <span>
          <p>
            清华大学交叉信息研究院量子信息研究团队联合创立。清华大学量子信息中心执行主任、基础科学讲席教授、姚期智讲座教授段路明任首席科学家。
          </p>
        </span>
      </span>
    ),
  },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: 'https://statics.pkumozzie.cn/huayi/future.jpg',
    className: 'l1xi64wwwth-editor_css',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <p>我们的愿景</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <p>
          填补中国量子计算领域的空白，普及量子计算硬件，解决通用量子算法，推广量子云计算，致力于成为国际上卓越的量子计算公司。
        </p>
      </span>
    ),
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>华翊量子提供专业的服务</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>基于离子阱量子计算的强大优势</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <span>
                    <p>定制化设计</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>定制化100~200qubit的离子阱量子计算机</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>快速交付</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>快速交付16~32qubit的离子阱量子计算机</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>云模拟</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>全功能25qubit量子云模拟系统</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>芯片加工</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <span>
                    <p>基于Yb/Ba/Ca的囚禁离子阱设计及加工</p>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>模块化光路</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>模块化光路设计及加工</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <span>
                    <p>配套实验装置</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>激光频率稳定、功率稳定模块设计及加工</p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://statics.pkumozzie.cn/huayi/logo-big.png',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: '引领算力革命，创造全新未来',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 48,
        md: 12,
        className: 'block',
        title: { children: '联系我们' },
        childWrapper: {
          children: [
            { name: 'link0', children: '联系人：姚麟' },
            { name: 'link1', children: '联系电话：18910537531' },
            { name: 'link2', children: '联系邮箱：yaolin@hyqubit.com' },
            { name: 'link3', children: '地址：北京市北京经济技术开发区信创园11号楼1层' },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span id="contact">
        ©2022 by <a href="https://www.hyqubit.com">HYQ</a> All Rights
        Reserved
      </span>
    ),
  },
};

