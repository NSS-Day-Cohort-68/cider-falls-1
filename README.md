# Cider Falls Park Web Site

You have been contracted to build an interactive web site for a public park in your county - Cider Falls. Here are the features that the administrator of the park wants to have.

## Destinations

There are six major destinations in the park. This application will display information about the park areas, their services, and about the guests. We will only track first and last name for each guest.

1. In the northeast section, there is the **Chamfort River** that supports rafting, canoeing, and fishing.
1. In the northern section, there is the **Lost Wolf Hiking Trail** that supports hiking, picnicking, and rock climbing.
1. In the northwest section, the main attraction is the **Lodge**, but there is also a hotel, and a restaurant. This area supports lodging, parking, information, and picnicking.
1. In the southwest section, there is the **Gander River**, which is a natural preserve, so it only supports fishing and hiking.
1. In the southern section, the main attraction is the  **Campgrounds**. Ther eis also the office park, and children play areas. This area supports information, lodging, and parking.
1. In the southeast section, there is the **Pine Bluffs Trails**, a vast network of trails for all levels of hikers. On the beginner trail, there are food vendors. This area support hiking, picnicking, and zip lines.

* Each section should have a title _(e.g. Lost Wolf Hiking Trail)_.
* Each section should display the services is supports _(e.g. hiking)_.

## General Layout

The administrator wants the park logo and park name at the top of the page. She wants the main phone number, email address, and street address at the bottom of the page.

All of the areas should be displayed in the proper location in a layout of two rows, and three columns.

The areas grid should be in the main content area of the page, and left aligned.

The names of all current park guests should be listed in the main content area of the page, and right aligned.

## Wireframes

Given these requirements by the park administrator, use your wireframing tool to make a low fidelity layout of the project.

# Cider Falls Data Design

Now that you hav a visualization of how the project will be presented to the user in the browser, it is time to design the data needed for the project.

1. What are the main resources? For example, one resource is **Guests**.
1. What are the properties of each resource?
1. What are the relationships between the resources?

## Hints

Here are some helpful hints to get you moving if you feel stuck.

<details>
    <summary>Main resources</summary>

These are the main resources, but may not be all of the tables you define in your ERD. That will depend on what you determine their relationships to be.

1. ParkAreas
1. Services
1. Guests

</details>

<details>
    <summary>How to determine relationships</summary>

Pick two resources in your ERD. For example, ParkAreas and Guests. Then ask yourself the following two questions.

1. Can a park area have many guests?
1. Can a guest currently be visting many park areas?

If the answer to only one of those questions is yes, the you have a one-to-many relationship. You put the foreign key on the correct resource and draw the relationship.

If the answer both one of those questions is yes, then you have a many-to-many relationship. This requires a joining table between the resources which will contain a foreign key to each main resource. Then draw both relationships.
</details>

# Algorithmic Thinking Reminder

This project is more complex than either DeShawn's Dog Walking or Brewed Awakenings, and you are not provided with any initial, boilerplate code.

It is crucial, therefore, that you work on designing the algorithm before you write **any** code.

1. What are the main resources (i.e. tables)? Design your ERD first.
1. What are the properties of each resource?
1. What is the relationship between the resources? If it's many-to-many, what additional data must you design in your ERD?
1. Which modules should you create?
1. What is the responsibility of each module?
1. What functions should be in which modules?
1. What is the responsibility of each function?
1. What should each function return?
1. What is the spcific algorithm for each function? Does the function need parameters? Should it return something?

Do all of this before you write a single line of code, or you could end up wasting hours of time writing code only to find that you need to throw it all away because you didn't design the algorithm first.

# You Are Here

When the title of any area is clicked, the current number of park guests in that area should be displayed.

# Where Is This Service?

The park administrator has a new feature request. Right above the park area grid, she would like all of the services that the park provides listed. When a park guest clicks on one of the services, a message should be displayed show which park areas support that service.
