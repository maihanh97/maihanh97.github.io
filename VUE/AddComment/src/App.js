import moment from 'moment';
import { VueEditor } from 'vue2-editor';

export default {
  components: {
    VueEditor,
  },
  name: 'App',
  data() {
    return {
      add: false,
      userCurrent: 'le hien',
      ava:
        'https://lh5.googleusercontent.com/-HcKtiretO2g/AAAAAAAAAAI/AAAAAAAAAH0/IXGAL7MX8sQ/photo.jpg?sz=32',
      totalLike: 0,
      totalComment: 4,
      dataComment: '',
      listcomment: [
        {
          usercomment: 'Do Yen',
          avaUser:
            'https://www.phillipconnect.com/Assets/Uploaded-CMS-Files/SpacesFiles/1490/ea137f75-651d-4b77-9103-a1ab3b4a9a4c.jpeg',
          body:
            'As what Chairman commented in the recently concluded Retail Brainstorming: "Nobody has the monopoly of truth."',
          inforUser: '#',
          dateCreated: '2020-01-31',
          replyComment: [
            {
              usercomment: 'Do Yen',
              avaUser:
                'https://www.phillipconnect.com/Assets/Uploaded-CMS-Files/SpacesFiles/1490/ea137f75-651d-4b77-9103-a1ab3b4a9a4c.jpeg',
              body: '"Nobody has the monopoly of truth."',
              inforUser: '#',
              dateCreated: '2020-01-31',
            },
          ],
          idComment: 111,
        },
        {
          usercomment: 'Dang Tien',
          avaUser:
            'https://www.phillipconnect.com/Assets/Uploaded-CMS-Files/SpacesFiles/1490/ea137f75-651d-4b77-9103-a1ab3b4a9a4c.jpeg',
          body:
            'My personal opinion (besides adding to Mr Lim’s 3 points above): We are all human, and will inadvertently “trip” from time to time despite our best efforts. Important thing is to have the humility to learn from others (regardless of age/rank etc) and work on continuous improvement by questioning underlying assumptions (which may not work anymore) so as to facilitate growth towards the “best version” of oneself. 🌷🙏🌻',
          inforUser: '#',
          dateCreated: '2021-01-31',
          replyComment: [
            {
              usercomment: 'Do Yen',
              avaUser:
                'https://www.phillipconnect.com/Assets/Uploaded-CMS-Files/SpacesFiles/1490/ea137f75-651d-4b77-9103-a1ab3b4a9a4c.jpeg',
              body: '"Nobody has the monopoly of truth."',
              inforUser: '#',
              dateCreated: '2020-01-31',
            },
            {
              usercomment: 'Do Yen',
              avaUser:
                'https://www.phillipconnect.com/Assets/Uploaded-CMS-Files/SpacesFiles/1490/ea137f75-651d-4b77-9103-a1ab3b4a9a4c.jpeg',
              body: '"Nobody has the monopoly of truth."',
              inforUser: '#',
              dateCreated: '2020-01-31',
            },
          ],
          idComment: 112,
        },
        {
          usercomment: 'Pham Hieu',
          avaUser:
            'https://www.phillipconnect.com/Assets/Uploaded-CMS-Files/SpacesFiles/1490/ea137f75-651d-4b77-9103-a1ab3b4a9a4c.jpeg',
          body:
            'Looking into the future, size of digital assets markets may grow exponentially to include non-traditional alternative assets e.g. carbon credit, real estate etc. traded as security tokens and exchange tokens at secondary markets or it can be traded as contracts like CFD',
          inforUser: '#',
          dateCreated: '2021-02-20',
          replyComment: [
            {
              usercomment: 'Do Yen',
              avaUser:
                'https://www.phillipconnect.com/Assets/Uploaded-CMS-Files/SpacesFiles/1490/ea137f75-651d-4b77-9103-a1ab3b4a9a4c.jpeg',
              body: '"Nobody has the monopoly of truth."',
              inforUser: '#',
              dateCreated: '2020-01-31',
            },
            {
              usercomment: 'Do Yen',
              avaUser:
                'https://www.phillipconnect.com/Assets/Uploaded-CMS-Files/SpacesFiles/1490/ea137f75-651d-4b77-9103-a1ab3b4a9a4c.jpeg',
              body: '"Nobody has the monopoly of truth."',
              inforUser: '#',
              dateCreated: '2020-01-31',
            },
          ],
          idComment: 113,
        },
      ],
      listData: null,
    };
  },
  methods: {
    addcomment(e) {
      this.add = !this.add;
      console.log(e);
    },
  },
  mounted() {
    this.listcomment.map(
      (item) => (item.dateCreated = moment(item.dateCreated).fromNow())
    );
    console.log(this.listData);
  },
};
