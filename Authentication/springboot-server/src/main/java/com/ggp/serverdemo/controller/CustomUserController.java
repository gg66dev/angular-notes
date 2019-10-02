package com.ggp.serverdemo.controller;


import com.ggp.serverdemo.model.User;
import com.ggp.serverdemo.repository.UserRepository;
import com.ggp.serverdemo.service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.PersistentEntityResource;
import org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.hateoas.MediaTypes;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceProcessor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@CrossOrigin(maxAge = 3600)
@RepositoryRestController
@RequestMapping(value = "users")
public class CustomUserController implements ResourceProcessor<PersistentEntityResource> {

    JwtUserDetailsService jwtUserDetailsService;

    @Autowired
    public void setJwtUserDetailsService(JwtUserDetailsService jwtUserDetailsService) {
        this.jwtUserDetailsService = jwtUserDetailsService;
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = APPLICATION_JSON_VALUE,
            produces = MediaTypes.HAL_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<PersistentEntityResource> saveTopic(@RequestBody Resource<User> userBody,
                                                              PersistentEntityResourceAssembler persistentEntityResourceAssembler) {
        User userToBeCreated = userBody.getContent();
        if (userToBeCreated == null || userToBeCreated.getEmail() == null || userToBeCreated.getPassword() == null) {
            HttpHeaders responseHeaders = new HttpHeaders();
            return new ResponseEntity<>(
                    persistentEntityResourceAssembler.toResource(userToBeCreated),
                    responseHeaders,
                    HttpStatus.NO_CONTENT);
        }
        User createdUser = jwtUserDetailsService.save(userToBeCreated);
        HttpHeaders headers = new HttpHeaders();
        // topic has been saved in DB
        return new ResponseEntity<>(
                persistentEntityResourceAssembler.toResource(createdUser),
                headers,
                HttpStatus.OK);


    }

    @Override
    public PersistentEntityResource process(PersistentEntityResource resource) {
        Object object = resource.getContent();
        if (object instanceof User) {
            User user = (User) object;
        }
        return resource;
    }
}
