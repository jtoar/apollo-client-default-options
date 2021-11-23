import { posts, post, createPost, updatePost, deletePost } from './posts'

describe('posts', () => {
  scenario('returns all posts', async (scenario) => {
    const result = await posts()

    expect(result.length).toEqual(Object.keys(scenario.post).length)
  })

  scenario('returns a single post', async (scenario) => {
    const result = await post({ id: scenario.post.one.id })

    expect(result).toEqual(scenario.post.one)
  })

  scenario('creates a post', async () => {
    const result = await createPost({
      input: { title: 'String8321764' },
    })

    expect(result.title).toEqual('String8321764')
  })

  scenario('updates a post', async (scenario) => {
    const original = await post({ id: scenario.post.one.id })
    const result = await updatePost({
      id: original.id,
      input: { title: 'String4890562' },
    })

    expect(result.title).toEqual('String4890562')
  })

  scenario('deletes a post', async (scenario) => {
    const original = await deletePost({ id: scenario.post.one.id })
    const result = await post({ id: original.id })

    expect(result).toEqual(null)
  })
})
