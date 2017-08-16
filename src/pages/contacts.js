import React from 'react'
import Link from 'gatsby-link'
import {Table} from 'react-bootstrap'

import FeedbackForm from '../components/feedback-form/feedback-form'

const Contacts = () =>
  <div className="container">
    <h1
      style={{
        marginTop: '20px',
      }}
    >My contacts:</h1>
    {/*<Table striped bordered condensed hover>*/}
    <Table responsive striped bordered condensed hover
           style={{
             fontSize: '20px',
           }}
    >
      <tbody>
      <tr>
        <td>
          Email:
        </td>
        <td>
          <Link
            to="mailto:ovsachuk@gmail.com?Subject=From%20my%20site"
            style={{
              color: '#000080',
              textDecoration: 'none',
            }}
          >
            ovsachuk@gmail.com</Link>
        </td>
      </tr>
      <tr>
        <td>
          Vodafone:
        </td>
        <td>
          <Link
            to="tel:+380509443746"
            style={{
              color: '#000080',
              textDecoration: 'none',
            }}
          >
            +380(50) 944-37-46
          </Link>
        </td>
      </tr>
      <tr>
        <td>
          Kyivstar:
        </td>
        <td>
          <Link
            to="tel:+380965243524"
            style={{
              color: '#000080',
              textDecoration: 'none',
            }}
          >
            +380(96) 524-35-24</Link>
        </td>
      </tr>
      <tr>
        <td>
          Life:
        </td>
        <td>
          <Link
            to="tel:+380932280143"
            style={{
              color: '#000080',
              textDecoration: 'none',
            }}
          >
            +380(93) 228-01-43</Link>
        </td>
      </tr>
      </tbody>
    </Table>
    <FeedbackForm/>
  </div>

export default Contacts
