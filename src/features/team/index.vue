<template>
  <div>
    <the-loading :loading="isLoading" :error="isError"></the-loading>

    <ul class="candidate" :class="{ 'show': !isLoading }">
      <li class="candidate__item" v-for="(candidate, i) in candidates" :key="i">
        <the-people :people="candidate" :active="isMember(candidate)" @click="updateTeam(candidate)"></the-people>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  import TheLoading from '../../components/loading'
  import ThePeople from '../../components/people'

  export default {
    name: 'TheTeam',

    components: {
      ThePeople,
      TheLoading
    },

    data() {
      return {
        isLoading: true,
        isError: false,
        candidates: [],
        team: [],
      }
    },

    created() {
      axios.get('https://uinames.com/api/?amount=12&ext')
      .then(res => {
        this.candidates = res.data
        this.isLoading = false
      })
      .catch(err => {
        this.isError = true
      })
    },

    methods: {
      isMember (candidate) {
        return this.searchMember(candidate) != -1 ? true : false
      },

      updateTeam (candidate) {
        let search = this.searchMember(candidate)

        if (search == -1) {
          this.addMember(candidate)
        } else {
          this.removeMember(search)
        }
      },

      addMember (candidate) {
        this.team.push(candidate)
      },

      removeMember (search) {
        this.team.splice(search, 1)
      },

      searchMember (candidate) {
        let search = -1

        if (this.team.length > 0) {
          this.team.forEach((member, i) => {
            if (member.email == candidate.email) {
              search = i
            }
          })
        }

        return search
      }
    }
  }
</script>

<style lang="scss">
  .candidate {
    margin: 0 auto;
    max-width: 270px;
    padding: 0 30px;
    list-style: none;

    opacity: 0;
    transform: translateY(20px);
    transition: .5s ease;

    &.show {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .candidate__item {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 568px) {
    .candidate {
      display: flex;
      flex-wrap: wrap;
      max-width: 568px;
    }

    .candidate__item {
      margin-right: 2%;
      margin-bottom: 2%;
      width: calc(50% - 1%);

      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .candidate {
      max-width: 840px;
    }

    .candidate__item {
      margin-right: 2%;
      margin-bottom: 2%;
      width: calc(33% - 1%);

      &:nth-child(2n) {
        margin-right: 2%;
      }

      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
</style>
