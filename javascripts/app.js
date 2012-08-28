with (scope('App')) {
  define('default_layout', function(yield) {
    return section({ id: 'wrapper' },
      header(
        h1('BountySource')
      ),
      section({ id: 'content' },
        yield
      ),
      footer(
        ul(
          li(a({ href: '#about' }, 'About')),
          li(a({ href: '#about' }, 'Contact Us')),
          li(a({ href: '#about' }, 'Blog'))
        )
      )
    );
  });

  route('#', function() {
    render(
      h2('Developers'),
      ul(
        li(a({ href: BountySource.api_host + 'auth/github' }, 'Login via GitHub')),
        li(a({ href: '#bounties' }, 'Find Bounties'))
      ),
      h2('Patrons'),
      ul(
        li(
          "Search: ",
          search()
        )
      )
    );
  });
}