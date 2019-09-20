package com.ggp.serverdemo.repository;

import com.ggp.serverdemo.model.Event;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(maxAge = 3600)
@RepositoryRestResource(collectionResourceRel = "events", path = "events")
public interface EventRepository extends PagingAndSortingRepository<Event, Long> {

}
