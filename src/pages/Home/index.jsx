import React, {useEffect, useState} from 'react'
import Layout from '../../layout/main'
import { DropdownToggle, Media, Image} from '../../components'

import { Dropdown, Form, Nav } from 'react-bootstrap'
import {Plus, Filter, ChatSquareText, PersonCheck, Archive, BookmarkX, Trash, ThreeDots, Check, Bell, Person, Telephone, CameraVideo, FileEarmarkArrowDown, ExclamationTriangle, Search} from 'react-bootstrap-icons'
import SimpleBar from 'simplebar-react'
import classNames from 'classnames'
import { useNavigate, useSearchParams } from 'react-router-dom';

import Chat from './Chat'
import DeleteChat from '../../components/partials/DeleteChat'
import NewChat from '../../components/partials/NewChat'

import contacts from '../../store/contacts'

const Home = () => {

  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [chatData] = useState(contacts);
  const [selected, setSelected] = useState();

  const [audioCallModal, setAudioCallModal] = useState(false);
  const [videoCallModal, setVideoCallModal] = useState(false);
  const [deleteChatModal, setDeleteChatModal] = useState(false);
  const [newChatModal, setNewChatModal] = useState(false);

  const [showMain, setShowMain] = useState(searchParams.get('id') !== null && true);

// grabs the id of the url and loads the corresponding data
useEffect(() => {
  const id = searchParams.get('id');
  if (id !== undefined || null || "") {
    let selectedChat = chatData.find((item) => item.id === id);
    setSelected(selectedChat);
  };
  if (id == undefined || null || "") {
    navigate(`?id=${chatData[0].id}`)
  }
}, [searchParams, chatData]);

  return (
    <Layout title="Message" fullscreen content="tyn-chat has-aside-base">
      <div className="tyn-aside tyn-aside-base">
        <div className="tyn-aside-head">
          <div className="tyn-aside-head-text">
            <h3 className="tyn-aside-title">Chats</h3>
          </div>
          <div className="tyn-aside-head-tools">
            <ul className="link-group gap gx-3">
              <li>
                  <button onClick={()=>{
                      setNewChatModal(!newChatModal);
                    }} className="link">
                      <Plus size={16} />
                      <span>New</span>
                  </button>
              </li>
              <Dropdown as="li">
                <Dropdown.Toggle as={DropdownToggle} className="link">
                  <Filter size={16} />
                  <span>Filter</span>
                </Dropdown.Toggle>
                <Dropdown.Menu align="end" style={{marginTop: "10px"}}>
                  <Nav as="ul" variant="tabs" defaultActiveKey="allChat" className="tyn-list-links border-0">
                      <li>
                        <Nav.Link eventKey="allChat">
                          <ChatSquareText /> 
                          <span>All Chats</span>
                        </Nav.Link>
                      </li>
                      <li>
                        <Nav.Link eventKey="activeContacts">
                          <PersonCheck />
                          <span>Active Contacts</span>
                        </Nav.Link>
                      </li>
                      <li>
                        <Nav.Link eventKey="archivedChats">
                            <Archive />
                            <span>Archived Chats</span>
                        </Nav.Link>
                      </li>
                      <li>
                        <Nav.Link eventKey="spamMessages">
                            <BookmarkX />
                            <span>Spam Messages</span>
                        </Nav.Link>
                      </li>
                      <li>
                        <Nav.Link eventKey="trashBin">
                            <Trash />
                            <span>Trash Bin</span>
                        </Nav.Link>
                      </li>
                  </Nav>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        </div>
        <SimpleBar className="tyn-aside-body">
          <div className="tyn-aside-search">
            <Form.Group className="form-group tyn-pill">
              <div className="form-control-wrap">
                  <div className="form-control-icon start">
                    <Search />
                  </div>
                  <Form.Control className="form-control-solid" type="text" placeholder="Search contact / chat" />
              </div>
            </Form.Group>
          </div>
          <ul className="tyn-aside-list">
            {chatData.slice(0,11).map((item,index) => {
              const message = item.chats && item.chats[item.chats.length - 1].messages[item.chats[item.chats.length - 1].messages.length - 1];
              const direction = item.chats && item.chats[item.chats.length - 1].direction;
              return (
                <li key={item.id} 
                  className={classNames({
                    "tyn-aside-item":true,
                    "active" : selected?.id === item.id,
                    "unread" : item.unread
                  })}
                  onClick={(ev) => {
                    ev.preventDefault();
                    if(!ev.target.closest('.tyn-aside-item-option')){
                      navigate(`?id=${item.id}`)
                      setShowMain(true);
                    }
                  }}>
                  <Media.Group>
                    <Media size="lg">
                      <Image src={item.avatar} />
                    </Media>
                    <Media.Col>
                      <Media.Row>
                        <h6 className="name">{item.name}</h6>
                      </Media.Row>
                      <Media.Row className="has-dot-sap">
                        {item.chats && 
                        <>
                          <p className={classNames({
                            "content":true,
                            "text-capitalize":message.type !== "link",
                          })}>
                            {message.type === "text" ? `${message.content}` 
                            : message.type === "media" ? `${message.content.length} Media ${direction === "incoming" ? "Received" : "Sent"}`
                            : message.type === "file" ? `${message.content.length} File ${direction === "incoming" ? "Received" : "Sent"}`
                            : message.type === "link" ? ( `${message.content.link}`) 
                            : message.type === "call" ? ( `${direction} ${message.call.type} Call`) 
                            : '' }
                          </p>
                        </>
                        }
                        <span className="meta">
                          {item.last}
                        </span>
                      </Media.Row>
                    </Media.Col>
                    <Media.Option className="tyn-aside-item-option">
                      <ul className="tyn-media-option-list">
                          <Dropdown as="li" autoClose="outside" align="end">
                              <Dropdown.Toggle variant="white" className="btn-icon btn-pill"><ThreeDots /></Dropdown.Toggle>
                              <Dropdown.Menu>
                                  <ul className="tyn-list-links">
                                      <li><a href="#"><Check /> <span>Mark as Read</span></a></li>
                                      <li><a href="#"><Bell /><span>Mute Notifications</span></a></li>
                                      <li><button onClick={(ev) => {
                                          ev.preventDefault();
                                          navigate(`/contacts?id=${item.id}`);
                                        }}><Person /> <span>View Profile</span></button>
                                      </li>
                                      <li className="dropdown-divider"></li>
                                      <li><button
                                        onClick={()=>{
                                          setAudioCallModal(!audioCallModal);
                                        }}
                                        ><Telephone /> <span>Audio Call</span></button></li>
                                      <li><button 
                                        onClick={()=>{
                                            setVideoCallModal(!videoCallModal);
                                        }}
                                        ><CameraVideo /> <span>Video Call</span></button></li>
                                      <li className="dropdown-divider"></li>
                                      <li><a href="#"><FileEarmarkArrowDown /> <span>Archive</span></a></li>
                                      <li><button
                                        onClick={()=>{
                                          setDeleteChatModal(!deleteChatModal);
                                        }}
                                        ><Trash /> <span>Delete</span></button></li>
                                      <li><a href="#"><ExclamationTriangle /> <span>Report</span></a></li>
                                  </ul>
                              </Dropdown.Menu>
                          </Dropdown>
                      </ul>
                    </Media.Option>
                  </Media.Group>
                </li>
              );
            })}
          </ul>
        </SimpleBar>
      </div>
      {selected && <Chat selected={selected} showVideoCall={videoCallModal} setShowVideoCall={setVideoCallModal} showAudioCall={audioCallModal} setShowAudioCall={setAudioCallModal} showMain={showMain} setShowMain={setShowMain} />}
      <DeleteChat show={deleteChatModal} setShow={setDeleteChatModal} />
      <NewChat show={newChatModal} setShow={setNewChatModal} showVideo={videoCallModal} setShowVideo={setVideoCallModal} showAudio={audioCallModal} setShowAudio={setAudioCallModal} />
    </Layout>
  )
}

export default Home