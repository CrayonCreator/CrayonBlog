---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
   {
     avatar: 'https://avatars.githubusercontent.com/u/143786942?v=4',
     name: 'BemoDB',
     title: 'Bolaxious的文档库🥰',
     links: [
      { icon: 'github', link: 'https://github.com/Mengbooo' },
       { 
         icon: {
             svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>'
         }, 
         link: 'https://mengbooo.github.io/BemoDB' },
     ]
   },
   {
     avatar: 'https://avatars.githubusercontent.com/u/37259613?v=4',
     name: 'Hamster',
     title: 'Hamster滴博客',
     links: [
      { icon: 'github', link: 'https://github.com/Hamster5295' },
       { 
         icon: {
             svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>'
         }, 
         link: 'https://hamster5295.github.io/' },
     ]
   },

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      U Link
    </template>
    <template #lead>
      天下快意之事莫若友,快友之事莫若谈
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>