import LineIcon from '../../assets/line.svg';
import FilterIcon from '../../assets/filter.svg';
import SearchIcon from '../../assets/search.svg';
import Thump0 from '../../assets/tump.svg';
import Thump1 from '../../assets/tump1.svg';
import ShareIcon from '../../assets/share.svg';
import Thump3 from '../../assets/tump3.svg';
import Thump4 from '../../assets/tump4.svg';
import Thump5 from '../../assets/tump5.svg';
import Rupee from '../../assets/rupee.svg';
import Prev from '../../assets/prev.svg';
import Next from '../../assets/next.svg';
import Select from 'react-select';
import '../styles/body.css';
import Button from '@mui/material/Button';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';

function Body({ data }: any) {
  const itemsPerPage = 10;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [campaignDetails, setcampaignDetails] = useState<any>([]);
  const [activeList, setActiveList] = useState(campaignDetails);
  const [allActiveList, setAllActiveList] = useState(campaignDetails);

  // Pagination
  useEffect(() => {
    console.log(data, 'data');
    setcampaignDetails(data);
  }, []);

  useEffect(() => {
    console.log(activeList, 'activeList');
  }, [activeList]);

  useEffect(() => {
    setAllActiveList(campaignDetails);
    setActiveList(campaignDetails);
  }, [campaignDetails]);

  useEffect(() => {
    if (allActiveList.length > 0 && activeList.length === 0) {
      setItemOffset(0);
    }
  }, [allActiveList]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setActiveList(allActiveList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(allActiveList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, allActiveList]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % allActiveList.length;
    setItemOffset(newOffset);
  };
  // Pagination end

  const customStyles = {
    singleValue: (provided: any) => {
      const color = '#B5B5B5';
      const fontWeight = '400';
      const fontSize = '0.75rem';
      const width = '800px';
      const textAlign = 'left';
      return { ...provided, color, fontWeight, fontSize, width, textAlign };
    },
    control: (base: any) => ({
      ...base,
      border: 0,
      boxShadow: 'none',
      background: 'transparent',
      width: '13.25rem'
    }),
    option: (provided: any) => ({
      ...provided,
      fontSize: '0.875rem',
      padding: '0.2rem',
      paddingLeft: '0.75rem',
      textAlign: 'left'
    }),
    menu: (provided: any) => ({
      ...provided,
      width: '100%',
      zIndex: 50,
      marginTop: '0.1rem'
    }),
    menuPortal: (base: any) => ({ ...base, zIndex: 9999 })
  };

  return (
    <div className="body-container">
      <div className="body-wrap">
        <div className="title">Search Project</div>
        <div className="wrapper">
          <input className="search-input" placeholder="Search more projects" />
          <div className="img-grp">
            <img alt="" src={LineIcon} />
            <img alt="" src={SearchIcon} />
          </div>
        </div>
      </div>
      <div className="body-wrap2">
        <div className="popup-wrap">
          <div className="drop-0">
            <img alt="" src={FilterIcon} />
            <span className="text-1">Filter By</span>
          </div>
          <div className="drop-1">
            <label className="label-text">
              {' '}
              Category
              <Select
                styles={customStyles}
                menuPortalTarget={document.body}
                menuPlacement="auto"
                menuPosition="fixed"
                menuShouldBlockScroll
                components={{ IndicatorSeparator: () => null }}
                isSearchable={false}
                placeholder="Select Category"
                className="selector"
              />
            </label>
            <label className="label-text">
              {' '}
              Sub-Category
              <Select
                styles={customStyles}
                menuPortalTarget={document.body}
                menuPlacement="auto"
                menuPosition="fixed"
                menuShouldBlockScroll
                components={{ IndicatorSeparator: () => null }}
                isSearchable={false}
                placeholder="Select Sub Category"
                className="selector"
              />
            </label>
            <label className="label-text">
              {' '}
              Delivery Time
              <Select
                styles={customStyles}
                menuPortalTarget={document.body}
                menuPlacement="auto"
                menuPosition="fixed"
                menuShouldBlockScroll
                components={{ IndicatorSeparator: () => null }}
                isSearchable={false}
                placeholder="Select Time"
                className="selector"
              />
            </label>
            <label className="label-text">
              {' '}
              Country
              <Select
                styles={customStyles}
                menuPortalTarget={document.body}
                menuPlacement="auto"
                menuPosition="fixed"
                menuShouldBlockScroll
                components={{ IndicatorSeparator: () => null }}
                isSearchable={false}
                placeholder="Select Country"
                className="selector"
              />
            </label>
            <label className="label-text">
              {' '}
              Post Day
              <Select
                styles={customStyles}
                menuPortalTarget={document.body}
                menuPlacement="auto"
                menuPosition="fixed"
                menuShouldBlockScroll
                components={{ IndicatorSeparator: () => null }}
                isSearchable={false}
                placeholder="Select Day"
                className="selector"
              />
            </label>
          </div>
          <div className="drop-2">
            <label className="label-text">
              {' '}
              Pricing
              <Select
                styles={customStyles}
                menuPortalTarget={document.body}
                menuPlacement="auto"
                menuPosition="fixed"
                menuShouldBlockScroll
                components={{ IndicatorSeparator: () => null }}
                isSearchable={false}
                placeholder="Select Price"
                className="selector"
              />
            </label>
            <span className="text-0">Clear Filter</span>
            <Button variant="contained" className="btn-icon">
              {' '}
              Apply{' '}
            </Button>
          </div>
          <div className="td-head">
            <span className="text-title">Buyer</span>
            <span className="text-title1">Project Details</span>
            <span className="text-title2">Price</span>
            <span className="text-title">Delivery Time</span>
            <span className="text-title">Post Day</span>
            <span className="text-title">Offer</span>
            <span className="text-title"></span>
          </div>
          {activeList.length > 0 &&
            activeList?.map((data: any) => (
              <div className="td-body">
                <span className="cont">
                  <img
                    alt=""
                    src={
                      data.buyer_color === 1
                        ? Thump0
                        : data.buyer_color === 2
                        ? Thump1
                        : data.buyer_color === 3
                        ? Thump3
                        : data.buyer_color === 4
                        ? Thump4
                        : Thump5
                    }
                    style={{
                      backgroundColor: `${data.buyer_sub_color}`
                    }}
                    className="text-desp-img"
                  />
                  <span className="bold-font">{data.buyer}</span>
                </span>
                <span className="text-desp">{data.desp}</span>
                <span className="cont1">
                  <img alt="" src={Rupee} />
                  <span className="bold-font1">{data.price}</span>
                </span>
                <span
                  className="text-desp-img1"
                  style={{
                    backgroundColor: `${data.days_sub_color}`,
                    color: `${data.days_color}`
                  }}
                >
                  {data.days}
                </span>
                <span className="bold-text1">{data.post_day}</span>
                <span className="bold-text2">{data.offer}</span>
                <Button variant="contained" className="btn-share">
                  {' '}
                  <img alt="" src={ShareIcon} />
                  <span className="text-send">Send Offer</span>
                </Button>
              </div>
            ))}
          <div>
            {data?.length > 9 ? (
              <ReactPaginate
                breakLabel="..."
                nextLabel={<img src={Next} alt="" />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<img src={Prev} alt="" />}
                containerClassName="pagination"
                activeClassName="active"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
